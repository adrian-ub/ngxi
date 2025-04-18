import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTreeOptionIcon],svg[grommet-icons-tree-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m7 13l4.375-7H9l3-4l3 4h-2.375L17 13h-2l4 6.667H5L9 13zm5 11v-4"></svg:path>`,
})
export class GrommetIconsTreeOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
