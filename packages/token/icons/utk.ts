import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenUtkIcon],svg[token-utk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.969 12L21 7.671l-1.35-2.618l-7.354 3a.78.78 0 0 1-.59 0L4.35 5.056L3 7.67L11.032 12L3 16.328l1.35 2.618l7.355-3a.77.77 0 0 1 .588 0l7.355 3l1.35-2.618L12.966 12z"></svg:path>`,
})
export class TokenUtkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
