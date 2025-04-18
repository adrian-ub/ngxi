import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTypescriptIcon],svg[proicons-typescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="2"></svg:rect><svg:path d="M17.25 11.25h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2m-4.75-6v6m-2-6h4"></svg:path></svg:g>`,
})
export class ProiconsTypescriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
