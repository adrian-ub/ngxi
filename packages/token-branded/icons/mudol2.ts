import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMudol2Icon],svg[token-branded-mudol2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3C7547" d="m12 12.095l-5.5 3l5.5 3.3l5.5-3.3z"></svg:path><svg:path fill="#F95D33" d="M8.501 11.256v2.785l3.5-1.85l5.5 3.05v-3.05l-5.5-2.905z"></svg:path><svg:path fill="#F95D33" d="m12 3l8 4.5v.075l-2.51 1.4L12 5.95L6.5 8.97v6.05l5.5 3.02l5.485-3.015L20 16.49v.01L12 21l-8-4.5v-9z"></svg:path></svg:g>`,
})
export class TokenBrandedMudol2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
