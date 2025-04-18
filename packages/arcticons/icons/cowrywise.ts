import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCowrywiseIcon],svg[arcticons-cowrywise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.59 16.896A14.3 14.3 0 0 0 9.7 24c0 7.898 6.402 14.3 14.3 14.3S38.3 31.898 38.3 24h0c0-7.897-6.402-14.3-14.3-14.3H8.478"></svg:path><svg:circle cx="24" cy="24" r="7.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 16.9l-20.293-.001A21.5 21.5 0 0 0 2.5 24c0 11.874 9.626 21.5 21.5 21.5S45.5 35.874 45.5 24h0c0-11.874-9.626-21.5-21.5-21.5H13.25"></svg:path>`,
})
export class ArcticonsCowrywiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
