import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAutoConversationsIcon],svg[hugeicons-auto-conversations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.944 8.04h5.884M2 18l5.498-5.414a.6.6 0 0 1 .78-.055l4.246 3.14c.25.185.599.15.807-.083l7.954-8.885M18.108 6h2.823c.547 0 .995.44 1.006.992L22 10.065" color="currentColor"></svg:path>`,
})
export class HugeiconsAutoConversationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
