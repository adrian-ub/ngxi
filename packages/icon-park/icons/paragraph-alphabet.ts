import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphAlphabetIcon],svg[icon-park-paragraph-alphabet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 9H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 19H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 29H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 39H42"></svg:path><svg:path fill="#2F88FF" d="M11 9L7 17H15L11 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 19L7 17M16 19L15 17M7 17L11 9L15 17M7 17H15"></svg:path></svg:g>`,
})
export class IconParkParagraphAlphabetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
