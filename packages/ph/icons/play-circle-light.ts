import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlayCircleLightIcon],svg[ph-play-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m47.18-95.09l-64-40A6 6 0 0 0 102 88v80a6 6 0 0 0 9.18 5.09l64-40a6 6 0 0 0 0-10.18M114 157.17V98.83L160.68 128Z"></svg:path>`,
})
export class PhPlayCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
