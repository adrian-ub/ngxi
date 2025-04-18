import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageElectricityIcon],svg[mage-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.217 2.75h7.246a.525.525 0 0 1 .483.735l-2.835 6.617h4.779a.21.21 0 0 1 .157.347L9.301 21.16a.2.2 0 0 1-.358-.168l.967-7.74H5.436a.526.526 0 0 1-.494-.725l3.78-9.452a.525.525 0 0 1 .495-.326"></svg:path>`,
})
export class MageElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
