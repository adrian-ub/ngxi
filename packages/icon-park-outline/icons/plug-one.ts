import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePlugOneIcon],svg[icon-park-outline-plug-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="24" height="24" x="12" y="12" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 36v5a3 3 0 0 1-3 3H8m12-32V4m8 8V4m-6 20h4"></svg:path></svg:g>`,
})
export class IconParkOutlinePlugOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
