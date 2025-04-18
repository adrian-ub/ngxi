import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesChevronUpOutlineIcon],svg[bubbles-chevron-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75 17.189L11.47 6.47a.75.75 0 0 1 1.06 0l10.72 10.719"></svg:path>`,
})
export class BubblesChevronUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
