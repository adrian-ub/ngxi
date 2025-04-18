import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCompassIcon],svg[icon-park-solid-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m12 44l10.688-28.5M36 44L25.313 15.5"></svg:path><svg:circle cx="24" cy="12" r="4" fill="currentColor"></svg:circle><svg:path d="M37.57 33c-3.908 2.53-8.568 4-13.57 4s-9.662-1.47-13.57-4M24 8V4"></svg:path></svg:g>`,
})
export class IconParkSolidCompassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
