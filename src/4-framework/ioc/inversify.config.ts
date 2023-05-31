import { OperatorModule } from './operatorModule'
import { UseCasesModule } from './useCasesModule'

import { container } from '../shared/ioc/container'
import { ServiceModule } from './serviceModule'

container.load(UseCasesModule)
container.load(OperatorModule)
container.load(ServiceModule)
