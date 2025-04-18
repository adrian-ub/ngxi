import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneLightIcon],svg[ph-microphone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 174a46.06 46.06 0 0 0 46-46V64a46 46 0 0 0-92 0v64a46.06 46.06 0 0 0 46 46M94 64a34 34 0 0 1 68 0v64a34 34 0 0 1-68 0Zm40 141.75V240a6 6 0 0 1-12 0v-34.25A78.09 78.09 0 0 1 50 128a6 6 0 0 1 12 0a66 66 0 0 0 132 0a6 6 0 0 1 12 0a78.09 78.09 0 0 1-72 77.75"></svg:path>`,
})
export class PhMicrophoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
