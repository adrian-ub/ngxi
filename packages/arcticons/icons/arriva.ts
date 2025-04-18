import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArrivaIcon],svg[arcticons-arriva-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="17.699" cy="24.863" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="19.021" ry="4.131" transform="rotate(-60.255 17.699 24.864)"></svg:ellipse><svg:ellipse cx="29.346" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.811" ry="20.858" transform="rotate(-28.031 29.346 24)"></svg:ellipse><svg:ellipse cx="24.521" cy="26.263" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.784" ry="16.247" transform="rotate(-77.427 24.52 26.263)"></svg:ellipse>`,
})
export class ArcticonsArrivaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
