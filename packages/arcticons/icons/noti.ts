import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotiIcon],svg[arcticons-noti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.656 25.77a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.999 28.213V36.5m-12.44-11.68v9.917c0 .921.745 1.667 1.666 1.667h.5m-3.917-8.835h3.5m2.017-7.19V14.85c0-1.85-1.5-3.35-3.35-3.35h0a3.35 3.35 0 0 0-3.35 3.35h0m0 5.529V11.5m15.295 0a3.456 3.456 0 0 1 3.456 3.456v2.247a3.456 3.456 0 0 1-3.456 3.456h0a3.456 3.456 0 0 1-3.457-3.456v-2.247A3.456 3.456 0 0 1 29.92 11.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4"></svg:path>`,
})
export class ArcticonsNotiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
