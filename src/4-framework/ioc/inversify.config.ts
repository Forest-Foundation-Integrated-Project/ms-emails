import { OperatorModule } from './operatorModule'
import { UseCasesModule } from './useCasesModule'

import { container } from '../shared/ioc/container'

container.load(UseCasesModule)
container.load(OperatorModule)
