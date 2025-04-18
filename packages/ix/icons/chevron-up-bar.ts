import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronUpBarIcon],svg[ix-chevron-up-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 170.667h341.333V128H85.333zm345.691 183.191l-30.17 30.17L255.939 239.13L111.024 384.028l-30.17-30.17l175.085-175.085z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronUpBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
