import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMarkerdownIcon],svg[whh-markerdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m507 748l-123 276l-123-276Q146 709 73 609T0 384q0-104 51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384q0 125-73 225T507 748M384 128q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhMarkerdownIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
