import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLienViet24hIcon],svg[arcticons-lien-viet-24h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.395 20.831A19.5 19.5 0 0 1 24 27.098m0 .001a19.5 19.5 0 0 1 6.604-6.267m.001-.001A19.5 19.5 0 0 1 24 14.564"></svg:path><svg:path d="M23.999 14.565a19.5 19.5 0 0 1-6.604 6.267"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M17.395 20.831L4.5 20.854m26.105-.022l12.895.023"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M43.5 20.855a19.5 19.5 0 0 1-39 0"></svg:path><svg:path d="M37.21 20.855a13.21 13.21 0 1 1-26.42 0m0 0a13.21 13.21 0 1 1 26.42 0"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M17.395 20.831h13.21"></svg:path>`,
})
export class ArcticonsLienViet24hIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
