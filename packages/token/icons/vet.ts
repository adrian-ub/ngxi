import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVetIcon],svg[token-vet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3.844h-1.609c-.394 0-.748.225-.922.58l-4.219 8.74l-.006-.005l-1.125 2.328v.012l-1.125 2.329l-5.619-11.65h1.603c.394 0 .754.225.923.58l3.673 7.554l1.125-2.329l-2.965-6.103a3.61 3.61 0 0 0-3.25-2.036H3l1.125 2.334l6.75 13.978h2.25z"></svg:path>`,
})
export class TokenVetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
