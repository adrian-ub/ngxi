import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidListSuccessIcon],svg[icon-park-solid-list-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 10h24M20 24h24M20 38h24"></svg:path><svg:circle cx="8" cy="24" r="4" fill="currentColor"></svg:circle><svg:circle cx="8" cy="38" r="4" fill="currentColor"></svg:circle><svg:path d="m4 10l3 3l6-6"></svg:path></svg:g>`,
})
export class IconParkSolidListSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
