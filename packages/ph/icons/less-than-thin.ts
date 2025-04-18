import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLessThanThinIcon],svg[ph-less-than-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.61 201.71A4 4 0 0 1 200 204a3.85 3.85 0 0 1-1.71-.39l-152-72a4 4 0 0 1 0-7.23l152-72a4 4 0 0 1 3.42 7.23L57.34 128l144.37 68.38a4 4 0 0 1 1.9 5.33"></svg:path>`,
})
export class PhLessThanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
