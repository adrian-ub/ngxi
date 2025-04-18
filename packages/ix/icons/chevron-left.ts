import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronLeftIcon],svg[ix-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m362.695 400.853l-30.17 30.17L157.44 255.938L332.525 80.853l30.17 30.17l-144.898 144.915z"></svg:path>`,
})
export class IxChevronLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
