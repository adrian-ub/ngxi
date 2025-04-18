import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSubitoIcon],svg[arcticons-subito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="4.747" height="18.109" x="20.145" y="13.059" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.113" transform="rotate(-45.008 22.518 22.113)"></svg:rect><svg:rect width="4.751" height="14.806" x="14.521" y="26.256" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.163" transform="rotate(-67.702 16.897 33.66)"></svg:rect><svg:rect width="4.542" height="13.983" x="31.842" y="9.676" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.162" transform="rotate(-22.141 34.113 16.668)"></svg:rect>`,
})
export class ArcticonsSubitoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
