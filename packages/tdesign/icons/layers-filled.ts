import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLayersFilledIcon],svg[tdesign-layers-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.917l10.1 4.208L12 10.333L1.9 6.125zM2 9.98l10 4.308L22 9.98v2.181l-10 4.305L2 12.16zm0 6l10 4.308l10-4.308v2.181l-10 4.305L2 18.16z"></svg:path>`,
})
export class TdesignLayersFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
