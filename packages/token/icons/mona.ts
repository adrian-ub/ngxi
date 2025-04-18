import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMonaIcon],svg[token-mona-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.777 9.67L17.49 3.9l-2.52 3.97a12.7 12.7 0 0 0-5.94 0L6.51 3.9L5.223 9.67C3.846 10.775 3 12.224 3 13.81c0 3.473 4.032 6.29 9 6.29s9-2.817 9-6.3c0-1.575-.846-3.024-2.223-4.13M6.996 12h-.594l1.458-1.687h1.071zm4.95 4.437l-2.484-4.383l.612-.35l.558.859h2.718l.585-.869l.603.36l-2.583 4.383zM17.004 12l-1.935-1.687h1.08L17.607 12zm-5.04 3.033l-1.08-1.908h2.253z"></svg:path>`,
})
export class TokenMonaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
