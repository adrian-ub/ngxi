import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCombIcon],svg[icon-park-outline-comb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4.201 31.071L16.93 43.8L43.8 16.93L31.071 4.201M9.151 26.122l7.071 7.071m-1.414-12.728l7.07 7.071m-1.413-12.728l7.07 7.071M26.121 9.151l7.071 7.071M12.687 39.557l26.87-26.87"></svg:path>`,
})
export class IconParkOutlineCombIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
