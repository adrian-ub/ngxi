import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSlackIcon],svg[prime-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.36 14.11a1.68 1.68 0 1 1-1.68-1.68h1.68Zm.85 0a1.68 1.68 0 0 1 3.36 0v4.21a1.68 1.68 0 0 1-3.36 0Zm1.68-6.75a1.68 1.68 0 1 1 1.68-1.68v1.68Zm0 .85a1.68 1.68 0 0 1 0 3.36H5.68a1.68 1.68 0 0 1 0-3.36Zm6.75 1.68a1.68 1.68 0 1 1 1.68 1.68h-1.68zm-.85 0a1.68 1.68 0 0 1-3.36 0V5.68a1.68 1.68 0 0 1 3.36 0zm-1.68 6.75a1.68 1.68 0 1 1-1.68 1.68v-1.68Zm0-.85a1.68 1.68 0 0 1 0-3.36h4.21a1.68 1.68 0 0 1 0 3.36Z"></svg:path>`,
})
export class PrimeSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
