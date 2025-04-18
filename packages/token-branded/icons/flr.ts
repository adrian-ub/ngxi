import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFlrIcon],svg[token-branded-flr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E62058" d="M16.53 9.828H7.557c-2.464 0-4.487 1.868-4.55 4.233c0 .062.05.112.125.112h8.98c2.465.012 4.488-1.868 4.55-4.233a.124.124 0 0 0-.124-.112zm4.345-6.827H7.495A4.413 4.413 0 0 0 3 7.234c0 .062.05.111.112.111H16.5A4.42 4.42 0 0 0 21 3.113C21 3.05 20.944 3 20.882 3zM5.173 21a2.173 2.173 0 1 0 0-4.345a2.173 2.173 0 0 0 0 4.345"></svg:path>`,
})
export class TokenBrandedFlrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
