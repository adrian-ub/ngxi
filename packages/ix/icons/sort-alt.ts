import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSortAltIcon],svg[ix-sort-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 128V85.333h426.666V128zm0 149.333v-42.666H320v42.666zm0 149.334V384h170.666v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxSortAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
