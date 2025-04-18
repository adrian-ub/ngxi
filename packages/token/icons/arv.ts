import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenArvIcon],svg[token-arv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.606 16.269l-1.843-3.019h3.55l2.774 4.631a10 10 0 1 0-16.174 0L12 3.875L16.688 12h-3.55L12 9.944l-1.894 3.306h2.644l1.844 3.125H8.306l-2.2 3.706A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 5.831-1.875z"></svg:path>`,
})
export class TokenArvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
