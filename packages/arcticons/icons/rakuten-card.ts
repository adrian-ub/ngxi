import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenCardIcon],svg[arcticons-rakuten-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 8.5h31c2.216 0 4 1.784 4 4v23c0 2.216-1.784 4-4 4h-31c-2.216 0-4-1.784-4-4v-23c0-2.216 1.784-4 4-4"></svg:path><svg:path d="M17.696 29.065V12.35h5.584c3.221 0 5.799 2.507 5.799 5.641s-2.578 5.642-5.8 5.642h-5.583m5.794-.005l5.374 5.228m6.559 3.837l-19.528 2.95l-3.318-2.95z"></svg:path></svg:g>`,
})
export class ArcticonsRakutenCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
