import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesChevLeftOutlineIcon],svg[bubbles-chev-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.917 18L9.2 12.283a.4.4 0 0 1 0-.566L14.917 6"></svg:path>`,
})
export class BubblesChevLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
