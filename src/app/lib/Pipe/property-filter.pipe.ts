import {PipeTransform, Pipe} from '@angular/core'
import { AuthenticationService, UserDetails, PropertyDetails } from '../../authentication.service'
@Pipe({
    name: 'propertyFilter'
})
export class PropertyFilterPipe implements PipeTransform {
    transform(property: PropertyDetails[], searchTherm: string, filterPrice:string): PropertyDetails[] {
        if (!property || !searchTherm) {
            return property;
        }
        
        if(filterPrice){
            return property.filter(property =>
                property.PropertyType.indexOf(filterPrice.toLowerCase()) !== -1 );
        }else{
            return property;
        }
            
    }
    

}