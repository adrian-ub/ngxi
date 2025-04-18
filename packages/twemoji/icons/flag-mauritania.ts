import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagMauritaniaIcon],svg[twemoji-flag-mauritania-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CE2540" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#0F6433" d="M0 9v18h36V9z"></svg:path><svg:path fill="#FFC514" d="m14.936 12.664l1.894 1.375l-.722 2.221l-.002.005l.007-.005L18 14.889l1.887 1.371l.006.005l-.001-.005l-.722-2.221l1.894-1.375h-2.341L18 10.437l-.723 2.227z"></svg:path><svg:path fill="#FFC514" d="M26.1 13.641c-.019 4.458-3.638 8.067-8.1 8.067s-8.081-3.609-8.1-8.067a8.4 8.4 0 0 0-.294 2.173a8.395 8.395 0 1 0 16.79 0a8.4 8.4 0 0 0-.296-2.173"></svg:path>`,
})
export class TwemojiFlagMauritaniaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
