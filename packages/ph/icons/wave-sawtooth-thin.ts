import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothThinIcon],svg[ph-wave-sawtooth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.1 131.41l-104 64a4 4 0 0 1-2.1.59a4 4 0 0 1-4-4V71.16l-97.9 60.25a4 4 0 0 1-4.2-6.82l104-64A4 4 0 0 1 132 64v120.84l97.9-60.25a4 4 0 1 1 4.2 6.82"></svg:path>`,
})
export class PhWaveSawtoothThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
