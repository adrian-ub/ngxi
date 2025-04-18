import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumpadThinIcon],svg[ph-numpad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12m52-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M64 92a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12M64 148a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 56a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64-56a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhNumpadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
