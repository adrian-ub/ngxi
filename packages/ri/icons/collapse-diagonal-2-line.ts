import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollapseDiagonal2LineIcon],svg[ri-collapse-diagonal-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4h2v7H4V9h3.586L3.293 4.707l1.414-1.414L9 7.586zm11 11h-3.586l4.293 4.293l-1.414 1.414L15 16.414V20h-2v-7h7z"></svg:path>`,
})
export class RiCollapseDiagonal2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
