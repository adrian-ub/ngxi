import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLeetcodeIcon],svg[arcticons-leetcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.81 34.877l-6.938 6.937a5.726 5.726 0 0 1-8.115 0L8.613 31.67a5.726 5.726 0 0 1 0-8.116L18.757 13.41a5.726 5.726 0 0 1 8.115 0l7.628 7.627M18.757 13.41l9.008-8.91m-8.181 23.092h21.49"></svg:path>`,
})
export class ArcticonsLeetcodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
