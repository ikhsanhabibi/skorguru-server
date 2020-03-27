let db = {
  users: [
    {
      userId: "dh23ggj5h32g543j5gf43",
      handle: "user",
      createdAt: "2019-03-15T10:59:52.798Z",
      imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
      email: "user@email.com",
      nim: "",
      phone: "",
      year: ""
    }
  ],
  posts: [
    {
      userHandle: "user",
      title: "test titel",
      description: "This is a sample scream",
      createdAt:
        "Sat Mar 21 2020 14:41:35 GMT+0100 (Central European Standard Time)",
      likeCount: 5,
      commentCount: 3
    }
  ],
  comments: [
    {
      userHandle: "user",
      postId: "kdjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "kdjsfgdksuufhgkdsufky",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ]
};
const userDetails = {
  // Redux data
  credentials: {
    handle: "new",
    userId: "vF9wXcco5gR5Dn8tWOkbwhwiWbG3",
    nim: "Habibibiibi",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/skorguru.appspot.com/o/avatar%2Fgirl.png?alt=media&token=ba421bfa-54fc-49bf-a489-4046f46f1cc4",
    createdAt:
      "Sun Mar 22 2020 23:02:19 GMT+0100 (Central European Standard Time)"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh7O5oWfWucVzGbHH2pa"
    },
    {
      userHandle: "user",
      screamId: "3IOnFoQexRcofs5OhBXO"
    }
  ]
};
