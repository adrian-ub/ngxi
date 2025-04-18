import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostOutlineIcon],svg[healthicons-rural-post-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M39 12h4v2h-4z"></svg:path><svg:path fill-rule="evenodd" d="M6 16h17v2H8v19h21V25h8v12h3V18h-1v-2h3v21h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1zm25 21h4V27h-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M27 32h-1v-7H11v7h-1v2h17zm-14-5v5h11v-5z" clip-rule="evenodd"></svg:path><svg:path d="M5 12v2h18v-2zm29 3h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></svg:path><svg:path fill-rule="evenodd" d="M37 12a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm-10 0h8v8h-8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
