import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommandIcon],svg[hugeicons-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9v6H9V9zm0 6h3a3 3 0 1 1-3 3zm-6 .002H6a3 3 0 1 0 3 3zM15 9V6a3 3 0 1 1 3 3zM9 9V6a3 3 0 1 0-3 3z" color="currentColor"></svg:path>`,
})
export class HugeiconsCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
