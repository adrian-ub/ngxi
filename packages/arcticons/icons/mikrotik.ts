import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMikrotikIcon],svg[arcticons-mikrotik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.878 6.587a21 21 0 0 0-.11 2.165a21.173 21.173 0 0 0 21.174 21.173a21.3 21.3 0 0 0 3.558-.297M5.65 9.446a29 29 0 0 0-.15 2.965a29 29 0 0 0 29.002 29.002a29 29 0 0 0 4.874-.408"></svg:path>`,
})
export class ArcticonsMikrotikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
