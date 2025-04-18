import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLoveItRemoveOutlineIcon],svg[bubbles-love-it-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.247 17.25a6 6 0 1 0 12 0a6 6 0 0 0-12 0m8.25-2.25l-4.5 4.5m0-4.5l4.5 4.5"></svg:path><svg:path d="m8.223 16.5l-5.811-6.065a5.67 5.67 0 0 1-1.063-6.55v0a5.672 5.672 0 0 1 9.085-1.472L12 3.978l1.566-1.565a5.672 5.672 0 0 1 9.085 1.473v0A5.68 5.68 0 0 1 22.632 9"></svg:path></svg:g>`,
})
export class BubblesLoveItRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
