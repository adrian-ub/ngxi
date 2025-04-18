import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAtriIcon],svg[token-branded-atri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E01920" d="M9 5.25h1.5v3c0 4-.945 9.405-7.5 10.5v-2c1.5-.25 5.985-2 5.985-8.5zm2 0h2v13.5h-2zm4 0h-1.5v3c0 4 .945 9.405 7.5 10.5v-2c-1.5-.25-5.985-2-5.985-8.5z"></svg:path>`,
})
export class TokenBrandedAtriIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
