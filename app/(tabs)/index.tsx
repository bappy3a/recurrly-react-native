import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import { HOME_BALANCE, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { colors } from "@/constants/theme";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 p-5">
        <View className="home-header">
          <View className="home-user">
            <Image source={images.avatar} className="home-avatar" />
            <Text className="home-user-name">{HOME_USER.name}</Text>
          </View>

          <Image source={icons.add} className="home-add-icon" />
        </View>

        <View className="home-balance-card">
          <Text className="home-balance-label">Balance</Text>
          <View className="home-balance-row">
            <Text className="home-balance-amount">{ formatCurrency(HOME_BALANCE.amount) }</Text>
            <Text className="home-balance-date">
              {dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}
            </Text>
          </View>
        </View>

        <View>
            <ListHeading title="Upcomming" />

              <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => (<UpcomingSubscriptionCard data={item} />)}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={<Text className="home-empty-state">No upcoming renewals yet.</Text>}
              />

            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {UPCOMING_SUBSCRIPTIONS.map((sub) => (
                    <UpcomingSubscriptionCard key={sub.id} data={sub} />
                ))}
            </ScrollView> */}
        </View>

        <View>
          <ListHeading title="All Subscription" />
        </View>

      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
