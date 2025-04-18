import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGoOnIcon],svg[icon-park-outline-go-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m36 7l7 6.461L36 21"></svg:path><svg:path d="M40 14H17.006C10.123 14 4.278 19.62 4.01 26.5C3.726 33.77 9.733 40 17.006 40h16.996"></svg:path></svg:g>`,
})
export class IconParkOutlineGoOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
