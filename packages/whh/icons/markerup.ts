import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMarkerupIcon],svg[whh-markerup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1024q-104 0-192.5-51.5t-140-140T0 640q0-125 73-225t188-139L384 0l123 276q115 39 188 139t73 225q0 104-51.5 192.5t-140 140T384 1024m0-640q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhMarkerupIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
