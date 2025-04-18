import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityLayersLineIcon],svg[clarity-layers-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20.25a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 0-1.81l15-7.09a1 1 0 0 1 .85 0l15 7.09a1 1 0 0 1 0 1.81l-15 7.09a1 1 0 0 1-.42.1M5.34 12.16l12.66 6l12.66-6L18 6.18Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 26.16a1 1 0 0 1-.43-.1L2.57 19a1 1 0 1 1 .85-1.81L18 24.06l14.57-6.89a1 1 0 1 1 .86 1.83l-15 7.09a1 1 0 0 1-.43.07" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M18 32.07a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 .85-1.81L18 30l14.57-6.89a1 1 0 1 1 .85 1.81L18.43 32a1 1 0 0 1-.43.07" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityLayersLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
