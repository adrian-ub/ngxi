import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaShieldIcon],svg[gala-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="m 128,239.89376 c 0,0 -95.908938,-31.96965 -95.908938,-111.89376"></svg:path><svg:path d="M 32.091062,128 V 32.09106 c 0,0 31.969645,-15.984825 95.908938,-15.984825"></svg:path><svg:path d="m 128,239.89376 c 0,0 95.90894,-31.96965 95.90894,-111.89376"></svg:path><svg:path d="M 223.90894,128 V 32.09106 c 0,0 -31.96965,-15.984823 -95.90894,-15.984823"></svg:path><svg:path d="m 128,239.89376 2.8e-4,-223.787523"></svg:path></svg:g>`,
})
export class GalaShieldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
