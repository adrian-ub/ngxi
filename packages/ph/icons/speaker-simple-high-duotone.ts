import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleHighDuotoneIcon],svg[ph-speaker-simple-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 32v192l-72-56H40a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48Z" opacity=".2"></svg:path><svg:path d="M163.51 24.81a8 8 0 0 0-8.42.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 168 224V32a8 8 0 0 0-4.49-7.19M152 207.64l-59.09-45.95A7.94 7.94 0 0 0 88 160H40V96h48a7.94 7.94 0 0 0 4.91-1.69L152 48.36ZM208 104v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m32-16v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhSpeakerSimpleHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
