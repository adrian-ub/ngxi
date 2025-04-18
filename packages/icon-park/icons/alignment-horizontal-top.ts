import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignmentHorizontalTopIcon],svg[icon-park-alignment-horizontal-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M22 24H26"></svg:path><svg:path stroke="#fff" d="M18 18H30"></svg:path><svg:path stroke="#fff" d="M20 12H28"></svg:path></svg:g>`,
})
export class IconParkAlignmentHorizontalTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
