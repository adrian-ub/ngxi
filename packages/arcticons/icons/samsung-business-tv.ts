import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungBusinessTvIcon],svg[arcticons-samsung-business-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.018 13.621l5.098-5.097m-10.214 0L24 13.621"></svg:path><svg:rect width="39" height="25.855" x="4.5" y="13.621" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.119 31.638h5.763v7.839h-5.763zm.624-18.016v8.098a3.18 3.18 0 0 1-3.182 3.182h0a3.18 3.18 0 0 1-3.182-3.182v-8.098m17.242 0v8.098a3.18 3.18 0 0 1-3.182 3.182h0a3.18 3.18 0 0 1-3.182-3.182v-8.098"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.585 23.347a3.18 3.18 0 0 1-2.735 1.555h0a3.18 3.18 0 0 1-2.706-1.508m-5.388-.083A3.18 3.18 0 0 1 24 24.901h0a3.18 3.18 0 0 1-2.72-1.53m-5.424.024a3.18 3.18 0 0 1-2.706 1.507h0a3.18 3.18 0 0 1-2.756-1.59"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 21.72a3.18 3.18 0 0 1-3.182 3.182h0a3.18 3.18 0 0 1-3.182-3.182v-8.098m-26.272 0v8.098a3.18 3.18 0 0 1-3.182 3.182h0A3.18 3.18 0 0 1 4.5 21.72"></svg:path>`,
})
export class ArcticonsSamsungBusinessTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
