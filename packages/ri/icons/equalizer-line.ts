import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEqualizerLineIcon],svg[ri-equalizer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4zM9 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiEqualizerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
