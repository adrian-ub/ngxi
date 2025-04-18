import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKiltIcon],svg[token-kilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.063 3h3.374v10.8l-.843-1.8l.844 4.472V21H8.062z"></svg:path><svg:path fill="currentColor" d="M15.296 3h3.454l-4.421 7.875h-3.454zm-.298 18h3.752l-4.82-9h-3.617zM5.773 10.875h12.454c.292 0 .523.259.523.562c0 .315-.242.563-.523.563H5.773c-.292 0-.523-.259-.523-.563s.242-.562.523-.562"></svg:path>`,
})
export class TokenKiltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
