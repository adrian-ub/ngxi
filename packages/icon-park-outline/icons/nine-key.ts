import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNineKeyIcon],svg[icon-park-outline-nine-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M24.5 14a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 29c.818 2.193 2.548 4 5.5 4c3.038 0 5.5-2.686 5.5-6v-7"></svg:path></svg:g>`,
})
export class IconParkOutlineNineKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
