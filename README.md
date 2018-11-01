# React Single Page App

This is the repository for the [React Single Page App Tutorial](https://docs.stackery.io/docs/tutorials/react-spa-tutorial/) from Stackery.

This tutorial will guide you through the process of deploying and hosting a single-page React application using the serverless approach.

The tutorial is also available in video form on our [YouTube Channel](https://www.youtube.com/watch?v=3-00V9sYhpo&list=PLR310Kv1_epF2vuPK_KhqP79RKiY2Kyoz).

## Deploy this to your AWS account

You can deploy this application to your own AWS account using the following two Stackery CLI commands:

`stackery create` will initialize a new repo in your github account, initializing it with the contents of the referenced template repository.

```
stackery create --stack-name 'react-single-page' \
--git-provider 'github' \
--template-git-url 'https://github.com/stackery/react-single-page'
```

`stackery deploy` will deploy the newly created stack into your AWS account.

```
stackery deploy --stack-name 'react-single-page' \
--env-name 'development' \
--git-ref 'master'
```
