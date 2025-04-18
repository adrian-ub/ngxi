import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBusIcon],svg[carbon-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 11h2v4h-2zM3 11h2v4H3zm17 9h2v2h-2zm-10 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M21 4H11a5.006 5.006 0 0 0-5 5v14a2 2 0 0 0 2 2v3h2v-3h12v3h2v-3a2.003 2.003 0 0 0 2-2V9a5.006 5.006 0 0 0-5-5m3 6v6H8v-6ZM11 6h10a2.995 2.995 0 0 1 2.816 2H8.184A2.995 2.995 0 0 1 11 6M8 23v-5h16.001l.001 5Z"></svg:path>`,
})
export class CarbonBusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
