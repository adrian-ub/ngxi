import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMars4Icon],svg[token-mars4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.167 3l-5.642 9.845a2.73 2.73 0 0 0-.36 1.474c.03 1.317.882 2.618 2.333 2.618h9.857V21h3.482v-5.224a2.32 2.32 0 0 0-2.321-2.322H8.153L14.19 3.006h-4.023z"></svg:path>`,
})
export class TokenMars4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
