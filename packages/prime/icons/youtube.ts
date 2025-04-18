import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeYoutubeIcon],svg[prime-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.67 8.14a2 2 0 0 0-1.42-1.43A48 48 0 0 0 12 6.38a48 48 0 0 0-6.25.33a2 2 0 0 0-1.42 1.43A21.3 21.3 0 0 0 4 12a21.4 21.4 0 0 0 .33 3.88a2 2 0 0 0 1.42 1.4a48 48 0 0 0 6.25.33a48 48 0 0 0 6.25-.33a2 2 0 0 0 1.42-1.4A21.4 21.4 0 0 0 20 12a21.3 21.3 0 0 0-.33-3.86m-9.31 6.25V9.63L14.55 12l-4.19 2.38Z"></svg:path>`,
})
export class PrimeYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
