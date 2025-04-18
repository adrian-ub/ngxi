import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIpadOneIcon],svg[icon-park-outline-ipad-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="38" height="30" x="5" y="10" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 27v-4"></svg:path></svg:g>`,
})
export class IconParkOutlineIpadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
