import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneEnabledIcon],svg[streamline-airplane-enabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.031 5l-.19-1.298a2.97 2.97 0 0 1 .607-2.267a1.977 1.977 0 0 1 3.104 0c.505.64.725 1.46.607 2.267L8.969 5l3.833 1.944a.989.989 0 0 1-.665 1.846L8.5 7.97L8.281 10l1.9 1.61a.991.991 0 0 1-1.035 1.664L7 12.344l-2.146.93a.99.99 0 0 1-1.035-1.665L5.72 10L5.5 7.969l-3.637.821a.989.989 0 0 1-.665-1.846z"></svg:path>`,
})
export class StreamlineAirplaneEnabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
