import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrokenAgeIcon],svg[arcticons-broken-age-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.821 2.5l15.548 5.464L45.5 22.821l-5.464 15.548L25.179 45.5L9.631 40.036L2.5 25.179L7.964 9.631z"></svg:path><svg:circle cx="24" cy="24" r="7.531" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.794 24L24 9.794L38.206 24L24 38.206z"></svg:path>`,
})
export class ArcticonsBrokenAgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
