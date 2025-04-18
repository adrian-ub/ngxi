import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMarkerleftIcon],svg[whh-markerleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 768q-125 0-225-73T276 507L0 384l276-123q39-115 139-188T640 0q104 0 192.5 51.5t140 140T1024 384t-51.5 192.5t-140 140T640 768m0-640q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhMarkerleftIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
