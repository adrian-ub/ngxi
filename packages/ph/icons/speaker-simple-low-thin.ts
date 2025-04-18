import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleLowThinIcon],svg[ph-speaker-simple-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.76 28.41a4 4 0 0 0-4.22.43L86.63 84H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 164 224V32a4 4 0 0 0-2.24-3.59M156 215.82l-65.54-51A4.06 4.06 0 0 0 88 164H40a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4.06 4.06 0 0 0 2.46-.84l65.54-51ZM204 104v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhSpeakerSimpleLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
