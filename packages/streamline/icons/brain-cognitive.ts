import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrainCognitiveIcon],svg[streamline-brain-cognitive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 13.5V11h2a1 1 0 0 0 1-1V6a5.5 5.5 0 1 0-8 4.9v2.6"></svg:path><svg:path d="M5.5 3.312a3.25 3.25 0 0 0-1.436 3.9c.12.335.48.503.824.412c1.737-.46 3.505-1.705 4.58-2.675c.285-.257.343-.687.09-.975A3.25 3.25 0 0 0 5.5 3.312"></svg:path></svg:g>`,
})
export class StreamlineBrainCognitiveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
