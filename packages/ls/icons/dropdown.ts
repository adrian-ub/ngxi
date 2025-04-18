import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsDropdownIcon],svg[ls-dropdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m602.442 200l-253 317c-24 29-61 29-84 0l-253-317c-24-30-12-53 25-53h540c38 0 49 23 25 53"></svg:path>`,
})
export class LsDropdownIcon {
  readonly viewBox = input("0 0 616 614")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
