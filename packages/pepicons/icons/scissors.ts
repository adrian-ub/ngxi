import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsScissorsIcon],svg[pepicons-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 5.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0Zm5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM2 14a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0Zm5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"></svg:path><svg:path d="M16.707 15.293a1 1 0 0 1-1.414 1.414l-8.5-8.5a1 1 0 0 1 1.414-1.414l8.5 8.5Z"></svg:path><svg:path d="M6.793 11.293a1 1 0 1 0 1.414 1.414l8.5-8.5a1 1 0 0 0-1.414-1.414l-8.5 8.5Z"></svg:path></svg:g>`,
})
export class PepiconsScissorsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
