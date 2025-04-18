import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiMqttIcon],svg[cbi-mqtt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2h-5.054a26 26 0 0 1 3.413 2.792A27 27 0 0 1 22 7.917V3a1 1 0 0 0-1-1M9.316 2H3a1 1 0 0 0-1 1v.981A18.22 18.22 0 0 1 20.15 22H21a1 1 0 0 0 .993-1.007v-6.806A21.58 21.58 0 0 0 9.316 2M2 7.034v3.256A11.883 11.883 0 0 1 13.8 22h3.38A15.15 15.15 0 0 0 2 7.034m0 6.31V21a1 1 0 0 0 1 1h7.82A8.81 8.81 0 0 0 2 13.344"></svg:path>`,
})
export class CbiMqttIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
