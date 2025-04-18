import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBubbleMinusIcon],svg[tabler-bubble-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.4 19a4.2 4.2 0 0 1-1.57-.298L7 21v-3.134a2.668 2.668 0 0 1-1.795-3.773A4.8 4.8 0 0 1 8.113 5.16a5.335 5.335 0 0 1 9.194 1.078a5.333 5.333 0 0 1 3.404 8.771M16 19h6"></svg:path>`,
})
export class TablerBubbleMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
