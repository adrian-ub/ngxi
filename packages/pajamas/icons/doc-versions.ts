import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasDocVersionsIcon],svg[pajamas-doc-versions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 7v5.5h-7v-9H11V6a1 1 0 0 0 1 1zm-2-3.379L14.379 5.5H12.5zM7 2a1 1 0 0 0-1 1H4a1 1 0 0 0-1 1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5.414a1 1 0 0 0-.293-.707l-2.414-2.414A1 1 0 0 0 12.586 2zm-1 9.5v-7H4.5v7zm-3-1v-5H1.5v5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasDocVersionsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
