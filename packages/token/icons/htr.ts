import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHtrIcon],svg[token-htr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12c0-4.385 3.615-8 8-8s8 3.615 8 8s-3.615 8-8 8s-8-3.615-8-8m8-9a9 9 0 1 0 0 18a9 9 0 0 0 0-18m1.5 6.5c-1.27.045-2.35.43-3 1.5V6H9v7.5H8V15h4v-1.5h-1v-.68c0-.95.945-2 1.92-2.025c1.325-.035 1.975.81 2.08 2.025v4.68h1.5v-5.2c0-1.8-1.5-2.8-3-2.8M8 16v1.5h4V16z"></svg:path>`,
})
export class TokenHtrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
