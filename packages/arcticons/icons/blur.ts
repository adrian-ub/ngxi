import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlurIcon],svg[arcticons-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.834 37.463V10.537m0 0H27.11a6.724 6.724 0 0 1 6.717 6.732h0A6.724 6.724 0 0 1 27.11 24H15.834"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.669 24H27.11a6.724 6.724 0 0 1 6.717 6.732h0a6.724 6.724 0 0 1-6.717 6.731H15.834M27.11 24H43.5m0 0v-4.683M38.817 24v-4.683"></svg:path><svg:circle cx="8.597" cy="24" r="4.097" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBlurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
