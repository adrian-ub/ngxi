import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAnticlockwiseFilledIcon],svg[tdesign-anticlockwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.333 5a3 3 0 0 1 3-3H13v2H7.333a1 1 0 0 0-1 1v6.5H4.34L.586 7.446l1.467-1.36l2.28 2.462zM8 6h15v15H8z"></svg:path>`,
})
export class TdesignAnticlockwiseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
