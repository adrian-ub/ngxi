import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesArrowCornerLeftOutlineIcon],svg[bubbles-arrow-corner-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.16 3.75L4.25 19.66m0-15v15h15"></svg:path>`,
})
export class BubblesArrowCornerLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
