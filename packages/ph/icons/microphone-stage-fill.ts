import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneStageFillIcon],svg[ph-microphone-stage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M115.06 46.36a4 4 0 0 0-6.11.54A71.54 71.54 0 0 0 96 88a73 73 0 0 0 .63 9.42l-69.51 94.8A15.93 15.93 0 0 0 28.71 213L43 227.29a15.93 15.93 0 0 0 20.78 1.59l94.81-69.53a73 73 0 0 0 9.41.65a71.54 71.54 0 0 0 41.09-12.93a4 4 0 0 0 .54-6.11Zm2.61 103.28l-16 16a8 8 0 1 1-11.31-11.31l16-16a8 8 0 0 1 11.31 11.31m109.4-20.56a4 4 0 0 1-6.12.54l-94.57-94.57a4 4 0 0 1 .54-6.12a71.93 71.93 0 0 1 100.15 100.15"></svg:path>`,
})
export class PhMicrophoneStageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
