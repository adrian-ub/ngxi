import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMailUnpackingIcon],svg[icon-park-outline-mail-unpacking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 18v21.818C44 41.023 43.105 42 42 42H6c-1.105 0-2-.977-2-2.182V18l20 16z"></svg:path><svg:path stroke-linecap="round" d="M4 17.784L24 4l20 13.784"></svg:path><svg:path d="M34 18H14v8l10 8l10-8z"></svg:path></svg:g>`,
})
export class IconParkOutlineMailUnpackingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
