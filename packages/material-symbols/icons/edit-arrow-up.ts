import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditArrowUpIcon],svg[material-symbols-edit-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 20V7.8l-1.1 1.1L16 7.5L19.5 4L23 7.5l-1.425 1.4L20.5 7.825V20zM3 18v-4.075l7.375-7.35q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4L7.075 18zm8.725-7.475l1.25-1.275l-1.225-1.225l-1.275 1.25z"></svg:path>`,
})
export class MaterialSymbolsEditArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
