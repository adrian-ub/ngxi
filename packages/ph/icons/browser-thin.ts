import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBrowserThinIcon],svg[ph-browser-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v36H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V100h184v100a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBrowserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
