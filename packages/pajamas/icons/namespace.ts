import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasNamespaceIcon],svg[pajamas-namespace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.3 4.125a.75.75 0 0 0-1.3-.75l-4.9 8.5a.75.75 0 1 0 1.3.75zM8 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasNamespaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
