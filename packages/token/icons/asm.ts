import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAsmIcon],svg[token-asm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.717 2.132a1.76 1.76 0 0 1 1 2.34l-2.833 6.86h7.233c.753 0 1.453.64 1.74 1.306l3 6.887a1.76 1.76 0 0 1-1 2.333a1.887 1.887 0 0 1-2.434-.96l-2.546-6.233H8.33l-2.753 6.233c-.4.913-1.487 1.34-2.433.96a1.76 1.76 0 0 1-1-2.333L9.297 3.099c.393-.914 1.48-1.34 2.426-.96z"></svg:path><svg:path fill="currentColor" d="M14.996 10.665a2.333 2.333 0 1 0 0-4.666a2.333 2.333 0 0 0 0 4.666"></svg:path>`,
})
export class TokenAsmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
