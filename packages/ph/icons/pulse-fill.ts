import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPulseFillIcon],svg[ph-pulse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 96h-19.36L159 188a8 8 0 0 1-6.95 4h-.46a8 8 0 0 1-6.89-4.84L103 89.92L79 132a8 8 0 0 1-7 4H48a8 8 0 0 1 0-16h19.36l29.69-52a8 8 0 0 1 14.3.82L153 166.08l24-42.05a8 8 0 0 1 6.95-4h24a8 8 0 0 1 0 16Z"></svg:path>`,
})
export class PhPulseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
