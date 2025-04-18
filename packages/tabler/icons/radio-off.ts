import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRadioOffIcon],svg[tabler-radio-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3L9.014 5M6.139 6.15l-1.51.604A1 1 0 0 0 4 7.682v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 .708-.294M20 16.005v-8a1 1 0 0 0-1-1h-8m-4 0H4.5M4 12h8m4 0h4M7 12v-2m6 6v.01M3 3l18 18"></svg:path>`,
})
export class TablerRadioOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
