import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardSquareFillIcon],svg[si-arrow-downward-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21m5.893-4.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 1 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiArrowDownwardSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
