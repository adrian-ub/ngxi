import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphRoundIcon],svg[icon-park-paragraph-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 9H42"></svg:path><svg:path d="M24 19H42"></svg:path><svg:path d="M6 29H42"></svg:path><svg:path d="M6 39H42"></svg:path><svg:circle cx="12" cy="14" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkParagraphRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
