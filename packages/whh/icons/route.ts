import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRouteIcon],svg[whh-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.665 64q106 0 181-18.5t75-45.5v256H.665V0q0 27 75 45.5t181 18.5t181-18.5t75-45.5q0 27 75 45.5t181 18.5m-256 960q-94-27-168.5-65.5t-125-78.5t-88.5-97t-59.5-104t-36.5-116.5t-21.5-118T.665 320h1024q-6 76-12.5 124.5t-21.5 118t-36.5 116.5t-59.5 104t-88.5 97t-125 78.5t-168.5 65.5"></svg:path>`,
})
export class WhhRouteIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
