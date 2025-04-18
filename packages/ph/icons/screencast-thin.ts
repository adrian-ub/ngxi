import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScreencastThinIcon],svg[ph-screencast-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 56v144a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v40a4 4 0 0 1-8 0V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12M32 188a4 4 0 0 0 0 8a12 12 0 0 1 12 12a4 4 0 0 0 8 0a20 20 0 0 0-20-20m0-32a4 4 0 0 0 0 8a44.05 44.05 0 0 1 44 44a4 4 0 0 0 8 0a52.06 52.06 0 0 0-52-52m0-32a4 4 0 0 0 0 8a76.08 76.08 0 0 1 76 76a4 4 0 0 0 8 0a84.09 84.09 0 0 0-84-84"></svg:path>`,
})
export class PhScreencastThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
