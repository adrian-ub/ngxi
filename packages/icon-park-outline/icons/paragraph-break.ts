import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineParagraphBreakIcon],svg[icon-park-outline-paragraph-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 4v40M42 4v40M18 26l-4 4l4 4"></svg:path><svg:path d="M15 30h13a6 6 0 0 0 0-12H14"></svg:path></svg:g>`,
})
export class IconParkOutlineParagraphBreakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
