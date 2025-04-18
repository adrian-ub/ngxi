import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetatrader4Icon],svg[arcticons-metatrader-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="26.158" r="8.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="9.597" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.108 18.85c.01-.082.01-.165.01-.248v-2.37h7.764v2.37c0 .083 0 .166.01.249m.766-9.254a5.177 5.177 0 0 1 5.175 5.176v3.83a2.97 2.97 0 0 1-2.94 2.98m-13.786 0a2.98 2.98 0 0 1-2.94-2.98v-3.83a5.177 5.177 0 0 1 5.175-5.176"></svg:path><svg:circle cx="9.658" cy="34.439" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.617 33.183a2 2 0 0 0-.22.115l-2.053 1.185l-3.881-6.723l2.053-1.185c.071-.042.143-.083.21-.133m-8.397 3.963a5.177 5.177 0 0 1 1.894-7.07l3.317-1.915a2.97 2.97 0 0 1 4.051 1.056m6.894 11.94a2.98 2.98 0 0 1-1.112 4.036l-3.317 1.915a5.177 5.177 0 0 1-7.07-1.894"></svg:path><svg:circle cx="38.342" cy="34.439" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.274 26.442c.067.05.139.091.21.133l2.053 1.185l-3.881 6.723l-2.053-1.185q-.106-.065-.22-.116m7.63 5.291a5.177 5.177 0 0 1-7.07 1.894l-3.316-1.915a2.97 2.97 0 0 1-1.112-4.036m6.894-11.94a2.98 2.98 0 0 1 4.051-1.055l3.317 1.914a5.177 5.177 0 0 1 1.894 7.07m-15.566.253v-9l-4.83 6.046h5.962"></svg:path>`,
})
export class ArcticonsMetatrader4Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
