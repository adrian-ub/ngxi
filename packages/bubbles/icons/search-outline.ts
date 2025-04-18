import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSearchOutlineIcon],svg[bubbles-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.472 13.357a9.063 9.063 0 1 0 16.683-7.09a9.063 9.063 0 0 0-16.683 7.09m14.749 2.863l7.03 7.03"></svg:path>`,
})
export class BubblesSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
