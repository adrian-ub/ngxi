import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBranchOneIcon],svg[icon-park-branch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 33V15"></svg:path><svg:rect width="28" height="6" x="10" y="9" fill="#2F88FF"></svg:rect><svg:path d="M8 32L14 25H33.9743L40 32"></svg:path><svg:rect width="8" height="8" x="4" y="33" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="20" y="33" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="36" y="33" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkBranchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
