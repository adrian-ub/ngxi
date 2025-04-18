import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYegoIcon],svg[arcticons-yego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.05 20l-2.6 4l-2.6-4m2.6 8v-4m6.067 0h2.7m1.3 4h-4v-8h4m14.933 8c-1.5 0-2.6-1.2-2.6-2.6v-2.7c0-1.5 1.2-2.7 2.6-2.7h0c1.5 0 2.7 1.2 2.7 2.7v2.6c0 1.5-1.2 2.7-2.7 2.7m-6.067-5.3c0-1.5-1.2-2.7-2.7-2.7h0c-1.5 0-2.7 1.2-2.7 2.7v2.7c0 1.5 1.2 2.6 2.7 2.6h0c1.5 0 2.7-1.2 2.7-2.6h-2.7"></svg:path>`,
})
export class ArcticonsYegoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
