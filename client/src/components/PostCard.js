import React from 'react'
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {

  let icon = ''
  let iconColor = ''

  if (commentCount>0) {
    icon = 'comments'
    iconColor = 'teal'
  } else {
    icon = 'comment'
    iconColor = 'grey'
  }

  function likePost() {
    console.log('Like post')
    
  }

  function commentOnPost() {
    console.log('Comment on post')
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color={iconColor} basic>
            <Icon name="heart" />
          </Button>
          <Label basic color={iconColor} pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color={iconColor} basic>
            <Icon name={icon} />
          </Button>
          <Label basic color={iconColor} pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  )
}

export default PostCard
