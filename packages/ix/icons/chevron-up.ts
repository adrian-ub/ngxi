import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronUpIcon],svg[ix-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m400.853 362.695l30.17-30.17L255.938 157.44L80.853 332.525l30.17 30.17l144.915-144.898z"></svg:path>`,
})
export class IxChevronUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
