import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserScanIcon],svg[lets-icons-user-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M17 4h.502c1.211 0 1.817 0 2.281.232a2.2 2.2 0 0 1 .985.985C21 5.68 21 6.287 21 7.498V8m-4 12h.502c1.211 0 1.817 0 2.281-.232a2.2 2.2 0 0 0 .985-.985c.232-.464.232-1.07.232-2.281V16M7 4h-.502c-1.211 0-1.817 0-2.281.232a2.2 2.2 0 0 0-.985.985C3 5.68 3 6.287 3 7.498V8m4 12h-.502c-1.211 0-1.817 0-2.281-.232a2.2 2.2 0 0 1-.985-.985C3 18.32 3 17.713 3 16.502V16m4.626 1.07c.419-.605 1.036-1.128 1.808-1.499A5.95 5.95 0 0 1 12 15c.91 0 1.795.2 2.566.571c.772.371 1.39.894 1.808 1.499"></svg:path><svg:circle cx="12" cy="9" r="3"></svg:circle></svg:g>`,
})
export class LetsIconsUserScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
