import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArcticonslightIcon],svg[arcticons-arcticonslight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m24 10.8l-11.4 6.6v13.2L24 37.2l11.4-6.6V17.4L24 10.8z"></svg:path><svg:circle cx="8.1" cy="14.8" r="3.1"></svg:circle><svg:circle cx="24" cy="5.6" r="3.1"></svg:circle><svg:circle cx="39.9" cy="14.8" r="3.1"></svg:circle><svg:circle cx="39.9" cy="33.2" r="3.1"></svg:circle><svg:circle cx="24" cy="42.4" r="3.1"></svg:circle><svg:circle cx="8.1" cy="33.2" r="3.1"></svg:circle><svg:path d="m12.6 30.6l-1.8 1M24 37.2v2.1m0-28.5V8.7m11.4 21.9l1.8 1m-1.8-14.2l1.8-1m-24.6 1l-1.8-1m11.4 2.4v11h5.6"></svg:path></svg:g>`,
})
export class ArcticonsArcticonslightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
