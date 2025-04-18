import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDianziqianIcon],svg[icon-park-dianziqian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 8L24 13L34 19V29.2143L14 18V29L34 41L43 35.1071V13.8929L33 8Z"></svg:path><svg:path d="M24 35L15 41L5 35L5.00069 14L15 8L24 13"></svg:path></svg:g>`,
})
export class IconParkDianziqianIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
