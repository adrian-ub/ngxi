import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fePrintIcon],svg[fe-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 11V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h1a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2h-1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2H6c-1.1 0-2-.9-2-2v-3a2 2 0 0 1 2-2zm2-7v7h6V4zm5 9v2h2v-2zm-5 5v2h6v-2z"></svg:path>`,
})
export class FePrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
