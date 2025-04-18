import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCommuterBagIcon],svg[icon-park-outline-commuter-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31.992 22q.008-.462.008-.927C32 9.515 28.418 4 24 4s-8 5.515-8 17.073q0 .466.008.927"></svg:path><svg:rect width="22" height="22" x="13" y="22" rx="2"></svg:rect></svg:g>`,
})
export class IconParkOutlineCommuterBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
