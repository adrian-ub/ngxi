import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextLetterSpacingIcon],svg[proicons-text-letter-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7.6 16.937l1.571-3.781m0 0h5.658m-5.658 0l2.408-5.793c.166-.4.676-.4.842 0l2.408 5.793m0 0l1.571 3.78"></svg:path><svg:path d="M21.25 20.25V3.75m-18.5 16.5V3.75"></svg:path></svg:g>`,
})
export class ProiconsTextLetterSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
