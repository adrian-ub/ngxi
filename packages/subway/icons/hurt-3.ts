import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayHurt3Icon],svg[subway-hurt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m384 34.3l-128 128h106.7L149.3 375.7L234.7 205H128l89.6-143.4C194.9 45 167.5 34.3 128 34.3C64 34.3 0 77 0 205c0 64 64 192 256 298.7C448 397 512 269 512 205c0-128-64-170.7-128-170.7"></svg:path>`,
})
export class SubwayHurt3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
