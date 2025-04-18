import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronRightIcon],svg[ix-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m149.333 400.853l30.17 30.17l175.085-175.085L179.503 80.853l-30.17 30.17l144.898 144.915z"></svg:path>`,
})
export class IxChevronRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
