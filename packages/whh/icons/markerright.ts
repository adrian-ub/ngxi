import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMarkerrightIcon],svg[whh-markerright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M748 507q-39 115-139 188t-225 73q-104 0-192.5-51.5t-140-140T0 384t51.5-192.5t140-140T384 0q125 0 225 73t139 188l276 123zM384 128q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhMarkerrightIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
