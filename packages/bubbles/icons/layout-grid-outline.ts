import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLayoutGridOutlineIcon],svg[bubbles-layout-grid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75.747h4.5v4.5H.75zm9 0h4.5v4.5h-4.5zm9 0h4.5v4.5h-4.5zm-18 9h4.5v4.5H.75zm9 0h4.5v4.5h-4.5zm9 0h4.5v4.5h-4.5zm-18 9h4.5v4.5H.75zm9 0h4.5v4.5h-4.5zm9 0h4.5v4.5h-4.5z"></svg:path>`,
})
export class BubblesLayoutGridOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
