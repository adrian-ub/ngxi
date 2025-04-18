import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBeerIcon],svg[fe-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 16v3c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zM5 5v3h10V5zm0 5v9h10v-9zm4 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4-7h2v5h-2z"></svg:path>`,
})
export class FeBeerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
