import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixObjectsTreeIcon],svg[ix-objects-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 138.664l-96-96l-96 96l96 96zm-137.683 0L160 96.981v83.366zm31.016 117.333v170.667H320v-21.333H170.667v-85.334H320v-21.333H170.667v-42.667zm234.665 10.67l42.667 42.663L384 351.997l-42.667-42.666zm42.671 149.326L384 373.331l-42.665 42.664l42.667 42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxObjectsTreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
