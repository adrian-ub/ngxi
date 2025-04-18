import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarThreeSquaresBoldDuotoneIcon],svg[solar-three-squares-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="10" x="12" y="2" fill="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" d="M12 7h-1c-1.886 0-2.828 0-3.414.586S7 9.114 7 11v2c0 1.886 0 2.828.586 3.414S9.114 17 11 17h2c1.886 0 2.828 0 3.414-.586S17 14.886 17 13v-1h-1c-1.886 0-2.828 0-3.414-.586S12 9.886 12 8z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M7 12v1c0 1.886 0 2.828.586 3.414S9.114 17 11 17h1v1c0 1.886 0 2.828-.586 3.414S9.886 22 8 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18v-2c0-1.886 0-2.828.586-3.414S4.114 12 6 12z" opacity=".4"></svg:path>`,
})
export class SolarThreeSquaresBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
