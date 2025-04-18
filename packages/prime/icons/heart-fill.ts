import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeHeartFillIcon],svg[prime-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 5.71a4.92 4.92 0 0 0-3.51-1.46a4.92 4.92 0 0 0-3.51 1.46L12 6l-.28-.28a4.95 4.95 0 0 0-7 0a5 5 0 0 0 0 7l6.77 6.79a.75.75 0 0 0 1.06 0l6.77-6.79a5 5 0 0 0-.02-7.01"></svg:path>`,
})
export class PrimeHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
