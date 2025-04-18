import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCandyCaneOutlineIcon],svg[flowbite-candy-cane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8c0-.828.5-2 2-2m-2 2v2.5a1.5 1.5 0 1 1-3 0v-3m3 .5l-3-.5M12 6c1.5 0 2 1.172 2 2m-2-2V3M7 7.5C7 5.015 9.515 3 12 3m0 0c2.485 0 5 2.015 5 4.5v12a1.5 1.5 0 1 1-3 0V8m0 0h3m-3 4h3m-3 4h3"></svg:path>`,
})
export class FlowbiteCandyCaneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
