import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSpeaker2SolidIcon],svg[streamline-speaker-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 0a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 3 14h8a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11 0zm2.831 3.056a1.169 1.169 0 1 1 2.338 0a1.169 1.169 0 0 1-2.338 0M10.291 9a3.29 3.29 0 1 1-6.582 0a3.29 3.29 0 0 1 6.582 0M5.84 9a1.158 1.158 0 1 1 2.317 0a1.158 1.158 0 0 1-2.316 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSpeaker2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
