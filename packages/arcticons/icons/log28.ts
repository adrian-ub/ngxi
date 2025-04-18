import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLog28Icon],svg[arcticons-log28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29 35.5H11m26 6.954v-4.74h-2.234c-1.117 0-2.016-.9-2.016-2.016v-.538c0-1.117.9-2.016 2.016-2.016H37v-6.68h-2.484c-1.117 0-2.016-.9-2.016-2.016v-.538c0-1.117.9-2.016 2.016-2.016H37v-6.93h-2.484c-1.117 0-2.016-.9-2.016-2.016v-.538c0-1.116.9-2.015 2.016-2.015H37V5.54M29 24.5H11m13-11H11"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsLog28Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
