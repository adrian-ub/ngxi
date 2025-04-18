import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignRightOneIcon],svg[icon-park-align-right-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M42 42V6"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 6H32V12H16V6Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M12 21H32V27H12V21Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M6 36H32V42H6V36Z"></svg:path></svg:g>`,
})
export class IconParkAlignRightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
