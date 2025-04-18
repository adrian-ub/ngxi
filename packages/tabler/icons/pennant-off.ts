import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPennantOffIcon],svg[tabler-pennant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h4m-2 0V10m0-4V3m0 1l9 4l-4.858 2.16m-2.764 1.227L10 12M3 3l18 18"></svg:path>`,
})
export class TablerPennantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
