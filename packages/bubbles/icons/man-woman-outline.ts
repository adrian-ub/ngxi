import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesManWomanOutlineIcon],svg[bubbles-man-woman-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M7.5 1.875a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m0 6l.375 3.75h2.25l.375-3.75h1.125V6.75A2.626 2.626 0 0 0 6.75 5.4M4.5 11.625l.375-2.25h1.5L5.25 6c-.375-1.125-.84-1.875-1.875-1.875S1.875 4.875 1.5 6L.375 9.375h1.5l.375 2.25zm-2.625-9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path>`,
})
export class BubblesManWomanOutlineIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
