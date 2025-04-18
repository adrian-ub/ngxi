import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareBrokenIcon],svg[solar-fire-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.558 15c.277-.643.442-1.414.442-2.333c0-2.611-1.54-4.505-3-5.635c-.748-.58-1.706.021-1.706.968c0 .643-.289 1.713-.873 2.501c-.64.861-1.465.001-1.523-1.07c-.026-.49-.534-.662-.942-.391C8.063 9.633 7 10.81 7 12.667C7 16.933 10.111 18 11.667 18a6 6 0 0 0 3.022-.86"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarFireSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
