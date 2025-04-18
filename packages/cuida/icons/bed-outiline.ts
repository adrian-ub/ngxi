import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaBedOutilineIcon],svg[cuida-bed-outiline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="bed-outiline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M6 14a2 2 0 0 0-2 2v4a1 1 0 1 1-2 0v-4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4a1 1 0 1 1-2 0v-4a2 2 0 0 0-2-2z"></svg:path><svg:path d="M2 19a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M6.5 7.75c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V9A2.75 2.75 0 0 1 6.5 6.25h11A2.75 2.75 0 0 1 20.25 9v4a.75.75 0 0 1-1.5 0V9c0-.69-.56-1.25-1.25-1.25z"></svg:path><svg:path d="M5.75 12A2.25 2.25 0 0 1 8 9.75h2.1A2.25 2.25 0 0 1 12.35 12v1h-1.5v-1a.75.75 0 0 0-.75-.75H8a.75.75 0 0 0-.75.75v1.5h-1.5z"></svg:path><svg:path d="M11.25 12a2.25 2.25 0 0 1 2.25-2.25h2A2.25 2.25 0 0 1 17.75 12v1h-1.5v-1a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0-.75.75v1h-1.5z"></svg:path></svg:g></svg:g>`,
})
export class CuidaBedOutilineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
