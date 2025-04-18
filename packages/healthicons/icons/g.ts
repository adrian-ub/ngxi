import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGIcon],svg[healthicons-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M33.49 16.39a2 2 0 0 1-2.823.156A10 10 0 1 0 30 32v-6h-6a2 2 0 1 1 0-4h8a2 2 0 0 1 2 2v8.944a2 2 0 0 1-.667 1.491a14 14 0 1 1 0-20.87a2 2 0 0 1 .158 2.824" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsGIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
