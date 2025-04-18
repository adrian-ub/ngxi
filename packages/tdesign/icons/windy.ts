import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWindyIcon],svg[tdesign-windy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5a1 1 0 1 0 0 2h9v2h-9a3 3 0 1 1 0-6h4v2zM5.5 8a1.5 1.5 0 1 0 0 3H22v2H5.5a3.5 3.5 0 1 1 0-7H8v2zM5 18a3 3 0 0 1 3-3h10v2H8a1 1 0 1 0 0 2h4.5v2H8a3 3 0 0 1-3-3"></svg:path>`,
})
export class TdesignWindyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
