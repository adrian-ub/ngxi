import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsCustomerEnablementIcon],svg[aws-customer-enablement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" x="5" y="5" fill="#C925D1"></svg:rect><svg:rect width="72" height="72" x="1" y="1" stroke="#879196" stroke-width="2"></svg:rect><svg:path fill="#FFF" d="M38,32.508 L30.891,36.216 C30.334,30.175 27.456,25.199 23.604,23.248 C25.635,22.021 27,19.799 27,17.258 C27,13.398 23.859,10.258 20,10.258 C16.141,10.258 13,13.398 13,17.258 C13,19.79 14.355,22.005 16.374,23.234 C12.503,25.162 9.648,30.096 9.1,36.212 L2,32.508 L2,11.747 L20,2.359 L38,11.747 L38,32.508 Z M15,17.258 C15,14.501 17.243,12.258 20,12.258 C22.757,12.258 25,14.501 25,17.258 C25,20.015 22.757,22.258 20,22.258 C17.243,22.258 15,20.015 15,17.258 L15,17.258 Z M20,41.897 L11.039,37.222 C11.414,30.049 15.315,24.348 20,24.348 C24.719,24.348 28.593,30.028 28.963,37.221 L20,41.897 Z M19.989,-3.55271368e-15 L0,10.48 L0,33.775 L19.989,44.256 L40,33.775 L40,10.48 L19.989,-3.55271368e-15 Z" transform="translate(17 15)"></svg:path></svg:g>`,
})
export class AwsCustomerEnablementIcon {
  readonly viewBox = input("0 0 74 74")
  readonly width = input("1em")
  readonly height = input("1em")
}
