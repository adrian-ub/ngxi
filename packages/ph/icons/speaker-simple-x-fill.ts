import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleXFillIcon],svg[ph-speaker-simple-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.52 24.81a8 8 0 0 0-8.43.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A7.94 7.94 0 0 0 160 232a8 8 0 0 0 8-8V32a8 8 0 0 0-4.48-7.19M235.31 128l18.35-18.34a8 8 0 0 0-11.32-11.32L224 116.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L212.69 128l-18.35 18.34a8 8 0 0 0 11.32 11.32L224 139.31l18.34 18.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhSpeakerSimpleXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
