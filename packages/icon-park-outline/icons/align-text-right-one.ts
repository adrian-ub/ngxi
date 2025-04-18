import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlignTextRightOneIcon],svg[icon-park-outline-align-text-right-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M34 24H22m12-9H14m20 18H16"></svg:path></svg:g>`,
})
export class IconParkOutlineAlignTextRightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
