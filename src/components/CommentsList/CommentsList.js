import React from "react";
import { Text, Image } from "react-native";
import { List, ListItem, Left, Body } from "native-base";

import { styles } from "./CommentsListStyles";
import profileAvatar from "../../../assets/profileAvatar.png";

const CommentsList = props => {
  const { comments } = props;
  return (
    <List>
      {comments.map(comment => (
        <ListItem avatar key={comment.comment_id} style={styles.listItem}>
          <Left>
            <Image style={styles.avatarImage} source={profileAvatar} />
          </Left>
          <Body>
            <Text style={styles.commentText}>{comment.body}</Text>
          </Body>
        </ListItem>
      ))}
    </List>
  );
};

export default CommentsList;
