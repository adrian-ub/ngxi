import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNoicePodcastAndRadioIcon],svg[arcticons-noice-podcast-and-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.599 43.5a39 39 0 0 0 0-39L11.177 16.291a15.42 15.42 0 0 1 0 15.419z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.31 17.975a23.28 23.28 0 0 1-2.326 17.665M24.79 8.43a31.14 31.14 0 0 1 3.111 23.63"></svg:path>`,
})
export class ArcticonsNoicePodcastAndRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
