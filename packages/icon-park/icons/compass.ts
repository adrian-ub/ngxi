import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCompassIcon],svg[icon-park-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 44L22.6875 15.5"></svg:path><svg:path d="M36 44L25.3125 15.5"></svg:path><svg:circle cx="24" cy="12" r="4" fill="#2F88FF"></svg:circle><svg:path d="M37.57 33C33.6618 35.5307 29.0024 37 23.9998 37C18.9973 37 14.3379 35.5307 10.4297 33"></svg:path><svg:path d="M24 8V4"></svg:path></svg:g>`,
})
export class IconParkCompassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
