import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCandyCaneSolidIcon],svg[streamline-candy-cane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.98 0C8 0 8.986.32 9.804.907L8.046 3.632a1.615 1.615 0 0 0-2.217.081L2.845 2.511a1 1 0 0 0-.094-.03A4.84 4.84 0 0 1 6.98 0M2.29 3.627a5 5 0 0 0-.156 1.22v1.076a1.615 1.615 0 0 0 3.231 0v-1.05L2.378 3.67a1 1 0 0 1-.088-.043m6.306 1.458l2.134-3.31a4.85 4.85 0 0 1 1.097 3.071v1.27l-3.231 3.23v-4.26Zm0 6.03v1.27a1.616 1.616 0 0 0 3.23 0V7.884z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCandyCaneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
