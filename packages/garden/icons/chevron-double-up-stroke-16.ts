import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleUpStroke16Icon],svg[garden-chevron-double-up-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.61 7.812a.5.5 0 0 1 .013-.64l.065-.062l5-4a.5.5 0 0 1 .542-.054l.082.054l5 4a.5.5 0 0 1-.55.83l-.074-.05L8 4.141l-4.688 3.75a.5.5 0 0 1-.702-.079m0 5a.5.5 0 0 1 .013-.64l.065-.062l5-4a.5.5 0 0 1 .542-.054l.082.054l5 4a.5.5 0 0 1-.55.83l-.074-.05L8 9.141l-4.688 3.75a.5.5 0 0 1-.702-.079"></svg:path>`,
})
export class GardenChevronDoubleUpStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
