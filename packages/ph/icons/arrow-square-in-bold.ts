import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowSquareInBoldIcon],svg[ph-arrow-square-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 136v64a12 12 0 0 1-24 0v-35l-59.51 59.49a12 12 0 0 1-17-17L91 148H56a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m76-108H80a20 20 0 0 0-20 20v44a12 12 0 0 0 24 0V52h120v120h-40a12 12 0 0 0 0 24h44a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhArrowSquareInBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
