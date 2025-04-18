import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphUnfoldIcon],svg[icon-park-paragraph-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 4V44"></svg:path><svg:path d="M38 4V8"></svg:path><svg:path d="M38 22V26"></svg:path><svg:path d="M38 40V44"></svg:path><svg:path d="M14 15H42"></svg:path><svg:path d="M14 33H42"></svg:path></svg:g>`,
})
export class IconParkParagraphUnfoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
