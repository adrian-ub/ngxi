import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHederaIcon],svg[simple-icons-hedera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24m4.957 17.396h-1.581V14.01H8.622v3.378H7.05V6.604h1.58v3.384h6.754V6.604h1.58zm-1.581-6.259H8.622v1.724h6.754Z"></svg:path>`,
})
export class SimpleIconsHederaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
