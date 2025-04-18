import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCopperIudOutline24pxIcon],svg[healthicons-copper-iud-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.066 2H5a1 1 0 0 0 0 2h1.066zm.118 2h.882l1-2h-.882zM11 4H9.184l1-2H11c.364 0 .706.097 1 .268A2 2 0 0 1 13 2h.816l1 2H13v3.691l-2-1zm2 4.809v.882l-2-1v-.882zm-2 1v.882l2 1v-.882z"></svg:path><svg:path fill-rule="evenodd" d="M11 16.17v-4.36l2 1v3.362a3.001 3.001 0 1 1-2 0M12 18a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path><svg:path d="M19 4h-1.066l-1-2H19a1 1 0 1 1 0 2m-3.066 0h.882l-1-2h-.882z"></svg:path></svg:g>`,
})
export class HealthiconsCopperIudOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
