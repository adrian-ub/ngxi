import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLibraryIcon],svg[proicons-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="3.998" height="15" x="2.75" y="4.504" rx="1.5"></svg:rect><svg:rect width="3.998" height="15" x="9.201" y="4.504" rx="1.5"></svg:rect><svg:path d="M15.267 8.378c-.165-.615.2-1.247.814-1.411l1.038-.278c.614-.165 1.245.2 1.41.814l2.681 10.014a1.15 1.15 0 0 1-.814 1.41l-1.038.279a1.15 1.15 0 0 1-1.41-.815z"></svg:path></svg:g>`,
})
export class ProiconsLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
