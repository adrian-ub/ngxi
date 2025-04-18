import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIdCreditIcon],svg[arcticons-id-credit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.837" cy="17.282" r="2.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.587 22.172l-.035 9.236m4.535-9.248l-.035 9.248m.035-9.248c-.895.086-4.969.612-6.437-.97m0 11.06c1.902-.842 6.402-.842 7.87-.145m5.182-15.302c7.501 2.332 10.387-.983 15.855-.81c6.312.2 9.664 2.67 9.793 8.484c-.13 5.814-3.481 8.284-9.793 8.484c-5.468.173-8.354-3.142-15.855-.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.886 16.073c5.15 1.75 4.862 7.315 4.862 8.404s.288 6.655-4.862 8.404M23.911 17.593v13.77M20.075 17.39v14.174"></svg:path>`,
})
export class ArcticonsIdCreditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
