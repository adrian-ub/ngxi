import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEmailPileOutlineIcon],svg[bubbles-email-pile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M23.5 17.486a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-14a1.5 1.5 0 0 1 1.5-1.5h17a1.5 1.5 0 0 1 1.5 1.5z"></svg:path><svg:path d="m23 2.486l-9.5 9l-9.5-9m-.5 3.522h-2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2"></svg:path></svg:g>`,
})
export class BubblesEmailPileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
