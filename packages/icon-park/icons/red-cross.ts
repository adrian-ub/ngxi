import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRedCrossIcon],svg[icon-park-red-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path fill="#43CCF8" stroke="#fff" d="M27 12H21V21L12 21V27H21V36H27V27L36 27V21H27V12Z"></svg:path></svg:g>`,
})
export class IconParkRedCrossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
