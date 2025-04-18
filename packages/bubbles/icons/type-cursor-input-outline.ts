import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTypeCursorInputOutlineIcon],svg[bubbles-type-cursor-input-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75 6.748h22.5v10.5H.75zm16.5 12v-13.5m-4.5 18a4.5 4.5 0 0 0 4.5-4.5a4.5 4.5 0 0 0 4.5 4.5m-9-22.5a4.5 4.5 0 0 1 4.5 4.5a4.5 4.5 0 0 1 4.5-4.5"></svg:path>`,
})
export class BubblesTypeCursorInputOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
