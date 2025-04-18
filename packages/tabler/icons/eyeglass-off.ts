import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeglassOffIcon],svg[tabler-eyeglass-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.536 5.546L3 14M16 4h2l3 10m-11 2h4m5.426 3.423A3.5 3.5 0 0 1 14 16.5V14m4 0h3v2.5q0 .236-.03.463M10 16.5a3.5 3.5 0 0 1-7 0V14h7zM3 3l18 18"></svg:path>`,
})
export class TablerEyeglassOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
