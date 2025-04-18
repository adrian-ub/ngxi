import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleXIcon],svg[ph-speaker-simple-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.51 24.81a8 8 0 0 0-8.42.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 168 224V32a8 8 0 0 0-4.49-7.19M152 207.64l-59.09-45.95A7.94 7.94 0 0 0 88 160H40V96h48a7.94 7.94 0 0 0 4.91-1.69L152 48.36Zm101.66-61.3a8 8 0 0 1-11.32 11.32L224 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L212.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L224 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L235.31 128Z"></svg:path>`,
})
export class PhSpeakerSimpleXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
