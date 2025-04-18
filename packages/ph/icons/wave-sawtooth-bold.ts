import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothBoldIcon],svg[ph-wave-sawtooth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.29 138.22l-104 64A12 12 0 0 1 116 192V85.47l-85.71 52.75a12 12 0 0 1-12.58-20.44l104-64A12 12 0 0 1 140 64v106.53l85.71-52.75a12 12 0 1 1 12.58 20.44"></svg:path>`,
})
export class PhWaveSawtoothBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
