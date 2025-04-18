import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEquadIcon],svg[token-equad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.552 19.76l1.08 1.232h2.813l-6.188-6.75h-2.531l3.313 3.786a6.75 6.75 0 1 1 1.997-1.524l1.496 1.687a9.001 9.001 0 1 0-1.974 1.57z"></svg:path>`,
})
export class TokenEquadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
