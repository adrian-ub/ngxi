import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSubscriptOutlineIcon],svg[flowbite-subscript-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20h-4v-.5c1.099-1.033 3.75-2.5 3.75-3.5v-1a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1M4 4l9.122 11.393m0-11.393L4 15.393"></svg:path>`,
})
export class FlowbiteSubscriptOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
