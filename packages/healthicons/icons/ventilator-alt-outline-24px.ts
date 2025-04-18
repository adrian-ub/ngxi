import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVentilatorAltOutline24pxIcon],svg[healthicons-ventilator-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4v12h7v1h-1a1 1 0 1 0 0 2h1v1H4v2h2a1 1 0 1 0 0 2a1 1 0 0 0 0-2h12a1 1 0 1 0 0 2a1 1 0 0 0 0-2h2v-2h-7v-1h1a1 1 0 1 0 0-2h-1v-1h7v-4h-2v2H6V9h5.164l1.208-1.208l2.594 3.63L17.239 8.5H20v-2h-3.74l-1.226 1.577l-2.406-3.369L10.336 7H6V4h12v1h2z"></svg:path>`,
})
export class HealthiconsVentilatorAltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
