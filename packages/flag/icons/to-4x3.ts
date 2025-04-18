import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTo4x3Icon],svg[flag-to-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#c10000" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M0 0h250v200.3H0z"></svg:path><svg:g fill="#c10000"><svg:path d="M102.8 31.2h39.9v139.6h-39.8z"></svg:path><svg:path d="M192.6 81v40H53V81z"></svg:path></svg:g></svg:g>`,
})
export class FlagTo4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
