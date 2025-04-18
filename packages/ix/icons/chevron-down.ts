import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronDownIcon],svg[ix-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m400.915 149.333l30.17 30.17L256 354.588L80.915 179.503l30.17-30.17L256 294.231z"></svg:path>`,
})
export class IxChevronDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
