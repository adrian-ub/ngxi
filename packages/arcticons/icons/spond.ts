import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpondIcon],svg[arcticons-spond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24c.084 3.339 4.948 7.277 13.764 9.813c7.346 2.113 9.47 4.294 9.47 7.832c0 1.513-.295 2.688-2.183 3.85m16.117-6.775c.378-.538.604-1.264.604-2.067c0-2.92-2.39-8.28-16.272-12.653S7.728 14.267 7.728 11.347c0-.803.226-1.529.604-2.067M45.5 24c-.084-3.339-4.948-7.277-13.764-9.813c-7.346-2.112-9.47-4.294-9.47-7.831c0-1.514.295-2.69 2.183-3.851"></svg:path>`,
})
export class ArcticonsSpondIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
