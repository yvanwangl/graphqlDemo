import {
	GraphQLInt as Int,
	GraphQLFloat as Float,
	GraphQLString as String,
	GraphQLList as List,
	GraphQLObjectType as ObjectType,
	GraphQLEnumType as EnumType,
	GraphQLNonNull as NonNull,
	GraphQLSchema,
	graphql
} from 'graphql';

const Query = new ObjectType({
	name: 'RootQueries',
	fields: ()=>({
		echo: {
			type: String,
			args: {
				message: {
					type: String
				}
			},
			resolve(root, params, options){
				return `receive ${params.message}`;
			}
		}
	})
});


const Schema = new GraphQLSchema({
	query: Query
});


let query = `
	query getEcho($inputMessage: String){ receivedMessage: echo(message: $inputMessage)}
`;

graphql(Schema, query, null, {inputMessage:"World"}).then((result)=> console.log(result));












