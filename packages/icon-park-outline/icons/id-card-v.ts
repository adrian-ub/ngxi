import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIdCardVIcon],svg[icon-park-outline-id-card-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" rx="2"></svg:rect><svg:path d="M24 19a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke-linecap="round" d="M30 25a6 6 0 0 0-12 0m0 6h12m-12 6h7"></svg:path></svg:g>`,
})
export class IconParkOutlineIdCardVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
