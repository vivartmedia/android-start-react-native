import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import React, {useState} from 'react'
import cat from '../assets/download.jpeg'
import StoriesComponent from "./StoriesComponent";

const PostComponent = () => {
  const [posts, setPosts] = useState([
    {
      ProfilePicture: footsaiah,
      Username: "Mr. footsaiah",
      Image: cat,
      NumOfLikes: "9,999",
      Description: "Look at this Cool cat! So Inspiring!",
      Comments: [{ UserWhoCommented: "caterpop_89", UsersComment: "Das me!" }],
    },
    {
      ProfilePicture: cat,
      Username: "caterpop_89",
      Image: footsaiah,
      NumOfLikes: "6,545",
      Description: "FOR FREE L O L XD??? Follow my boy on twitch!",
      Comments: [
        {
          UserWhoCommented: "Mr. footsaiah",
          UsersComment: "L O L Thanks caterpop_89!",
        },
      ],
    },
  ]);

  return (
    <ScrollView>
      <StoriesComponent/>
      {
        posts.map((post,idx) => {
          return (
            <View key={idx}>
              {/* This div will be the top of our post user img, username, 3 dots */}
              <View style={Style.ProfileNav}>
                <view style={{paddingTop: 10}}>
                  <Image source={post.ProfilePicture} style={Style.ImageeStyle}/>
                </view>
                <View style={Style.ProfileUsername}>
                  <Text style={tyle.UsernameText}>{post.Username}</Text>
                </View style={Style.DotsDiv}>
                <Text >.</Text>
                <Text>.</Text>
                <Text>.</Text>
              </View>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

export default PostComponent;

const Style =StyleSheet.create({
  ProfileNav: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  ImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 50
  }
  UsernameText: {
    color: "white",
    fontSize: 15,
    fontweight: "bold"
  },
  ProfileUsername: {
    paddingLeft: 20,
    justifyContent: "center",


  }
})
