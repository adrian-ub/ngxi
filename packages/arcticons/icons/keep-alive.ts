import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepAliveIcon],svg[arcticons-keep-alive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.207 20.5h-9.73A12 12 0 0 0 24 12a12 12 0 0 0-11.47 8.5H2.823m-.001 7h9.71A12 12 0 0 0 24 36a12 12 0 0 0 11.47-8.5h9.708"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24h14.333l1.544-2.69l3.234 6.13L24 15.51l2.389 16.252L29.96 21.31L31.166 24H45.5"></svg:path>`,
})
export class ArcticonsKeepAliveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
