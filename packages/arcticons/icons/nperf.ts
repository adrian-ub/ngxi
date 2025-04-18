import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNperfIcon],svg[arcticons-nperf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.254 7.527H16.862a7.41 7.41 0 0 0-7.426 7.427v19.45L5.5 30.469m6.246 10.004h19.392a7.41 7.41 0 0 0 7.426-7.427v-19.45l3.936 3.936"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.905 31.58v-9.44c0-3.159-2.644-5.72-5.905-5.72h0c-3.262 0-5.905 2.561-5.905 5.72m0 9.44V16.42"></svg:path>`,
})
export class ArcticonsNperfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
