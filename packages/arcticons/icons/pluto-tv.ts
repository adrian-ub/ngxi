import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlutoTvIcon],svg[arcticons-pluto-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.42 14.987a2.24 2.24 0 0 1-2.235-2.235v-1.453a2.24 2.24 0 0 1 2.235-2.235h0a2.24 2.24 0 0 1 2.235 2.235v1.453a2.24 2.24 0 0 1-2.235 2.235M21.34 9.064v3.688a2.24 2.24 0 0 0 2.235 2.235h0a2.24 2.24 0 0 0 2.235-2.235V9.064m0 3.688v2.235m3.539-7.823v7.823M28.12 9.064h2.347M18.189 6.047v7.823a1.056 1.056 0 0 0 .99 1.118a1 1 0 0 0 .127 0h.335m-8.273-2.236a2.24 2.24 0 0 0 2.235 2.235h0a2.24 2.24 0 0 0 2.235-2.235v-1.453a2.24 2.24 0 0 0-2.235-2.235h0a2.24 2.24 0 0 0-2.235 2.235m0-2.235v8.941m17.421 9.952v6.117a1.706 1.706 0 0 0 1.706 1.706h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.559 29.857h5.242l2.235 5.923l2.235-5.923"></svg:path><svg:circle cx="32.415" cy="31.869" r="10.085" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.33 31.869a10.08 10.08 0 0 1 7.282-9.682a10.085 10.085 0 1 0 0 19.363a10.08 10.08 0 0 1-7.281-9.681"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.129 31.869a10.08 10.08 0 0 1 7.281-9.682a10.085 10.085 0 1 0 0 19.363a10.08 10.08 0 0 1-7.281-9.681"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.724 31.869a10.08 10.08 0 0 1 7.281-9.682a10.085 10.085 0 1 0 0 19.363a10.08 10.08 0 0 1-7.28-9.681"></svg:path>`,
})
export class ArcticonsPlutoTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
