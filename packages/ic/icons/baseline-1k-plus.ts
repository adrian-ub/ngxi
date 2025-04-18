import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaseline1kPlusIcon],svg[ic-baseline-1k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 15H7.5v-4.5H6V9h3zm4.75 0L12 12.75V15h-1.5V9H12v2.25L13.75 9h1.75l-2.25 3l2.25 3zm5.75-2.5H18V14h-1v-1.5h-1.5v-1H17V10h1v1.5h1.5z"></svg:path>`,
})
export class IcBaseline1kPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
