import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenFillIcon],svg[ph-tree-evergreen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.19 195.51A8 8 0 0 1 224 200h-88v40a8 8 0 0 1-16 0v-40H32a8 8 0 0 1-6.31-12.91l46-59.09H48a8 8 0 0 1-6.34-12.88l80-104a8 8 0 0 1 12.68 0l80 104A8 8 0 0 1 208 128h-23.64l45.95 59.09a8 8 0 0 1 .88 8.42"></svg:path>`,
})
export class PhTreeEvergreenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
