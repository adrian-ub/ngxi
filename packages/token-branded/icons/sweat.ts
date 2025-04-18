import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSweatIcon],svg[token-branded-sweat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF0D74" d="M15.96 5.118h-2.774l-2.213 2.45l-1.292-2.45h-2.88L3 9.332v.074l5.003 9.476h2.822L13 16.463l1.28 2.42h2.928L21 14.672zM9.554 16.685l-3.669-6.95L8.11 7.271l3.663 6.946l-2.223 2.467zm6.316.074L12.2 9.814l2.224-2.462l3.668 6.951z"></svg:path>`,
})
export class TokenBrandedSweatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
