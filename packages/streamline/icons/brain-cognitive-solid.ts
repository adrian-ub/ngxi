import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrainCognitiveSolidIcon],svg[streamline-brain-cognitive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.883.002A6 6 0 0 1 13 6v4a1.5 1.5 0 0 1-1.5 1.5H10v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.303A6 6 0 0 1 6.883.002M3.56 7.21a3.768 3.768 0 0 1 6.373-3.757c.294.334.225.832-.105 1.13C8.582 5.71 6.53 7.154 4.515 7.688c-.398.106-.817-.09-.955-.477Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrainCognitiveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
