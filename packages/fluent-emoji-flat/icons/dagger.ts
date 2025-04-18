import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDaggerIcon],svg[fluent-emoji-flat-dagger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="m18 14l-6.5 9l-9 6.5c-1.367-1.367 2-7 4.025-8.975l9-9z"></svg:path><svg:path fill="#9B9B9B" d="M2.5 29.5c1.367 1.367 7-2 8.975-4.025l9-9L18 14z"></svg:path><svg:path fill="#7D4533" d="m26.475 10.475l-4 4a3.5 3.5 0 1 1-4.95-4.95l4-4c.817-.817 1.924-1.175 2.985-1.015L27 4.5l.49 2.99c.163 1.064-.196 2.165-1.015 2.985"></svg:path><svg:path fill="#F9C23C" d="M30 4.75a2.75 2.75 0 0 1-2.51 2.74l-2.98-2.98a2.75 2.75 0 0 1 5.49.24m-13.5 5.5q0 .293-.06.57l4.74 4.74q.277-.06.57-.06a2.75 2.75 0 1 1-2.69 2.18l-4.74-4.74q-.277.06-.57.06a2.75 2.75 0 1 1 2.75-2.75"></svg:path><svg:path fill="#F70A8D" d="M13.75 12a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m8 8a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatDaggerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
