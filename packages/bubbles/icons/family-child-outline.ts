import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFamilyChildOutlineIcon],svg[bubbles-family-child-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 5.25a3 3 0 1 0 6 0a3 3 0 0 0-6 0m1.312 15l.188 1.5h3l.75-6h1.5V13.5a3.75 3.75 0 0 0-6-3M1.5 5.25a3 3 0 1 0 6 0a3 3 0 0 0-6 0m4.688 15L6 21.75H3l-.75-6H.75V13.5a3.75 3.75 0 0 1 6-3m3-1.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0M12 12.75a3.75 3.75 0 0 0-3.75 3.75v.75h1.5l.75 4.5H12m0-9a3.75 3.75 0 0 1 3.75 3.75v.75h-1.5l-.75 4.5H12"></svg:path>`,
})
export class BubblesFamilyChildOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
