import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTypographyOffIcon],svg[tabler-typography-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h3m7 0h6M6.9 15h6.9m-.8-2l3 7M5 20L9.09 9.094m1.091-2.911L11 4h2l3.904 8.924M3 3l18 18"></svg:path>`,
})
export class TablerTypographyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
