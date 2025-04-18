import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShieldEnergyIcon],svg[hugeicons-shield-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755c-.888.3-1.333.449-1.512.66c-.18.21-.233.519-.338 1.135c-1.127 6.596 1.336 12.694 7.209 15.068c.631.255.947.382 1.526.382s.896-.128 1.527-.383c5.873-2.373 8.333-8.471 7.206-15.067c-.106-.616-.158-.925-.338-1.136s-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2"></svg:path><svg:path d="m8.129 11.131l3.999-4.94c.313-.387.899-.146.899.368v3.824c0 .309.23.559.514.559h1.944c.442 0 .678.566.386.927l-3.999 4.94c-.313.387-.899.146-.899-.368v-3.824c0-.309-.23-.559-.514-.559H8.515c-.441 0-.677-.566-.385-.927"></svg:path></svg:g>`,
})
export class HugeiconsShieldEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
