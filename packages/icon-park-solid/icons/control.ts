import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidControlIcon],svg[icon-park-solid-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="30" height="40" x="9" y="4" rx="2"></svg:rect><svg:circle cx="24" cy="31" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 12h3m-3 6h3m6 0h3"></svg:path></svg:g>`,
})
export class IconParkSolidControlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
