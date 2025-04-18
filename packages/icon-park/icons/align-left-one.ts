import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignLeftOneIcon],svg[icon-park-align-left-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 6H32V12H16V6Z"></svg:path><svg:path d="M6 42L6 6"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 21H36V27H16V21Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 36H42V42H16V36Z"></svg:path></svg:g>`,
})
export class IconParkAlignLeftOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
