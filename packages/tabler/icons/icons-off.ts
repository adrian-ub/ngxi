import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIconsOffIcon],svg[tabler-icons-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.01 4.041A3.5 3.5 0 0 0 6.5 10c.975 0 1.865-.357 2.5-1m.958-3.044a3.5 3.5 0 0 0-2.905-2.912M2.5 21h8l-4-7zM14 3l7 7m-7 0l7-7m-3 11h3v3m0 4h-7v-7M3 3l18 18"></svg:path>`,
})
export class TablerIconsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
