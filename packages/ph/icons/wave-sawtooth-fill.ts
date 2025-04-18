import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothFillIcon],svg[ph-wave-sawtooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-11.56 94.66l-72 48A8 8 0 0 1 128 184a8 8 0 0 1-8-8V95l-59.56 39.66a8 8 0 1 1-8.88-13.32l72-48A8 8 0 0 1 136 80v81.05l59.56-39.71a8 8 0 0 1 8.88 13.32"></svg:path>`,
})
export class PhWaveSawtoothFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
