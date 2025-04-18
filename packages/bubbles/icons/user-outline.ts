import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUserOutlineIcon],svg[bubbles-user-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 0 0-10.5 0m-4.5 17.25a9.75 9.75 0 1 1 19.5 0"></svg:path>`,
})
export class BubblesUserOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
