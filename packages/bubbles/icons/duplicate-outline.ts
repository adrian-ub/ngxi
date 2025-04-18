import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDuplicateOutlineIcon],svg[bubbles-duplicate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1"></svg:path><svg:path d="M15.5 4.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class BubblesDuplicateOutlineIcon {
  readonly viewBox = input("0 0 18 18")
  readonly width = input("1em")
  readonly height = input("1em")
}
