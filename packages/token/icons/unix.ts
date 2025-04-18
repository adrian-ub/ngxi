import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenUnixIcon],svg[token-unix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c-5.328 0-8.4-2.766-8.4-8.166V3h4.8v9.672c0 2.4.93 4.128 3.6 4.128c2.658 0 3.6-1.752 3.6-4.128V3h4.8v9.834c0 5.4-3.072 8.166-8.4 8.166"></svg:path><svg:path fill="currentColor" d="M12 16.2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class TokenUnixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
