import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphBreakIcon],svg[icon-park-paragraph-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 4V44"></svg:path><svg:path d="M42 4V44"></svg:path><svg:path d="M18 26L14 30L18 34"></svg:path><svg:path d="M15 30C15 30 25.7909 30 28 30C31.3137 30 34 27.3137 34 24C34 20.6863 31.3137 18 28 18C26.6852 18 14 18 14 18"></svg:path></svg:g>`,
})
export class IconParkParagraphBreakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
