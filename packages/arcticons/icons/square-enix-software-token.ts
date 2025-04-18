import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSquareEnixSoftwareTokenIcon],svg[arcticons-square-enix-software-token-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.001 10.144A14 14 0 0 1 38 24h0a14 14 0 0 1-12 13.856m-4 0a14 14 0 0 1 0-27.712"></svg:path><svg:circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16a4 4 0 0 0-4 4a4 4 0 0 0 2.12 3.52L20 32h8l-2.12-8.48A4 4 0 0 0 28 20a4 4 0 0 0-4-4M5.5 24H8m34.5 0H40"></svg:path>`,
})
export class ArcticonsSquareEnixSoftwareTokenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
