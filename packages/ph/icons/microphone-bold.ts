import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneBoldIcon],svg[ph-microphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 180a52.06 52.06 0 0 0 52-52V64a52 52 0 0 0-104 0v64a52.06 52.06 0 0 0 52 52M100 64a28 28 0 0 1 56 0v64a28 28 0 0 1-56 0Zm40 155.22V240a12 12 0 0 1-24 0v-20.78A92.14 92.14 0 0 1 36 128a12 12 0 0 1 24 0a68 68 0 0 0 136 0a12 12 0 0 1 24 0a92.14 92.14 0 0 1-80 91.22"></svg:path>`,
})
export class PhMicrophoneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
