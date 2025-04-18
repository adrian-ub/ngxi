import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHomeBrokenIcon],svg[solar-home-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m0-11l4.063-3.25M22 11l-8.126-6.5a3 3 0 0 0-3.748 0l-.782.625M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5m16 0v4m0 8.5v-4.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44M9 22v-5"></svg:path><svg:path d="M14 9.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path></svg:g>`,
})
export class SolarHomeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
