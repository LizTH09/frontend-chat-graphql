import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  generates: {
    'src/presentation/graphql/generated/graphql.ts': {
      config: {
        withHooks: true
      },
      documents: './src/**/*.graphql',
      plugins  : [ 'typescript', 'typescript-operations', 'typescript-react-apollo' ]
    }
  },
  overwrite: true,
  schema   : `${process.env.VITE_MAIN_SERVER_API}/graphql`
}
 
export default config