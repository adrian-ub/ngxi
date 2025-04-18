import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTypeCursorOutlineIcon],svg[bubbles-type-cursor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.748v-13.5m-4.5 18a4.5 4.5 0 0 0 4.5-4.5a4.5 4.5 0 0 0 4.5 4.5m-9-22.5a4.5 4.5 0 0 1 4.5 4.5a4.5 4.5 0 0 1 4.5-4.5"></svg:path>`,
})
export class BubblesTypeCursorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
