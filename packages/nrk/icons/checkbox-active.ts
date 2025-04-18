import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCheckboxActiveIcon],svg[nrk-checkbox-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 21V3h18v18zm6.95-4.03l8.26-8.26l-1.41-1.42l-6.74 6.74L7.5 11.1L6 12.4z" clip-rule="evenodd"></svg:path>`,
})
export class NrkCheckboxActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
