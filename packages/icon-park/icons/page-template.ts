import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPageTemplateIcon],svg[icon-park-page-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 4H4V26H23V4Z"></svg:path><svg:path d="M44 34H4V43H44V34Z"></svg:path><svg:path d="M44 4H31V12H44V4Z"></svg:path><svg:path d="M44 18H31V26H44V18Z"></svg:path></svg:g>`,
})
export class IconParkPageTemplateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
