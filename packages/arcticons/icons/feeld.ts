import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFeeldIcon],svg[arcticons-feeld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="14" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7"></svg:rect><svg:rect width="14" height="37" x="17" y="-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7" transform="rotate(-90 24 12.5)"></svg:rect><svg:rect width="14" height="37" x="13.632" y="2.172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7" transform="rotate(-45 20.632 20.672)"></svg:rect>`,
})
export class ArcticonsFeeldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
