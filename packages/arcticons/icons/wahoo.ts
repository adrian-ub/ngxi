import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWahooIcon],svg[arcticons-wahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.975 22.7c1.108 0 2 .892 2 2V26c0 1.108-.892 2-2 2s-2-.892-2-2v-1.3c0-1.108.892-2 2-2m5.675 0c1.108 0 2 .892 2 2V26c0 1.108-.892 2-2 2s-2-.892-2-2v-1.3c0-1.108.892-2 2-2M23.3 20v8m0-3.3a2 2 0 1 1 4 0V28m-5.675-2a2 2 0 1 1-4 0v-1.3a2 2 0 1 1 4 0m0 3.3v-5.3m-12.275 0L11 28l1.65-5.3L14.3 28l1.65-5.3"></svg:path>`,
})
export class ArcticonsWahooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
