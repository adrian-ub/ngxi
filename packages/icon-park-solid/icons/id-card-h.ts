import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidIdCardHIcon],svg[icon-park-solid-id-card-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" rx="2"></svg:rect><svg:path fill="currentColor" d="M17 25a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke-linecap="round" d="M23 31a6 6 0 0 0-12 0m17-11h8m-6 8h6"></svg:path></svg:g>`,
})
export class IconParkSolidIdCardHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
