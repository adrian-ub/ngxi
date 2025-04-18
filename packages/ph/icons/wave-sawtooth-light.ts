import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothLightIcon],svg[ph-wave-sawtooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.14 133.11l-104 64A6 6 0 0 1 122 192V74.74l-94.85 58.37a6 6 0 1 1-6.29-10.22l104-64A6 6 0 0 1 134 64v117.26l94.85-58.37a6 6 0 1 1 6.29 10.22"></svg:path>`,
})
export class PhWaveSawtoothLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
