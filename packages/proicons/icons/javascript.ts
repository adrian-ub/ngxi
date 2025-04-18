import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsJavascriptIcon],svg[proicons-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="2"></svg:rect><svg:path d="M11.5 11.25v5a1 1 0 0 1-1 1H9m8.25-6h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2"></svg:path></svg:g>`,
})
export class ProiconsJavascriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
