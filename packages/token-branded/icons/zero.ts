import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZeroIcon],svg[token-branded-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FCE058" fill-rule="evenodd" d="M12 20.505a8.506 8.506 0 1 0 0-17.011a8.506 8.506 0 0 0 0 17.01M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M12 20.01a8.01 8.01 0 1 0 0-16.022a8.01 8.01 0 0 0 0 16.021m0 .494a8.505 8.505 0 1 0 0-17.01a8.505 8.505 0 0 0 0 17.01" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="M15.375 8.063h-6.75V9.75h4.106l-4.106 4.894v1.293h6.75V14.25h-4.039l4.039-4.877z"></svg:path></svg:g>`,
})
export class TokenBrandedZeroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
