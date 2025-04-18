import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGameIcon],svg[codicon-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 3h8a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 6a.5.5 0 0 0-.5.5V8H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V9h1.5a.5.5 0 0 0 0-1H6V6.5a.5.5 0 0 0-.5-.5M13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class CodiconGameIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
