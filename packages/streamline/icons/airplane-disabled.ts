import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneDisabledIcon],svg[streamline-airplane-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.146 13.274L7 12.345l-2.146.93a.99.99 0 0 1-1.035-1.664L5.72 10L5.5 7.97l-3.637.821a.989.989 0 0 1-.665-1.846l1.916-.972M13.5 13.5L.5.5M5.031 5l-.19-1.298a2.97 2.97 0 0 1 .607-2.268a1.977 1.977 0 0 1 3.104 0c.505.64.725 1.46.607 2.268L8.969 5l3.833 1.944a.989.989 0 0 1-.665 1.846L8.5 7.969l-.052.48"></svg:path>`,
})
export class StreamlineAirplaneDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
