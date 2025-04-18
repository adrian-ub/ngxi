import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsEthereumLogoIcon],svg[lineicons-ethereum-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.093 12.185L11.998 2l5.907 10.185l-5.907 3.63z"></svg:path><svg:path fill="currentColor" d="M6.093 13.35L11.998 22l5.91-8.65l-5.91 3.627z"></svg:path>`,
})
export class LineiconsEthereumLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
