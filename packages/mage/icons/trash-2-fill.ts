import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTrash2FillIcon],svg[mage-trash-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.705 5.27h-4.7v-.89a2.4 2.4 0 0 0-.69-1.68a2.38 2.38 0 0 0-1.69-.7h-3.26a2.44 2.44 0 0 0-1.69.7a2.4 2.4 0 0 0-.69 1.68v.89h-4.69a.75.75 0 0 0 0 1.5h1.42v11.76A3.47 3.47 0 0 0 8.185 22h7.62a3.47 3.47 0 0 0 3.47-3.47V6.77h1.43a.75.75 0 0 0 0-1.5m-6.2 0h-5v-.89a.9.9 0 0 1 .25-.62a.94.94 0 0 1 .63-.26h3.26a.88.88 0 0 1 .63.26a.9.9 0 0 1 .25.62z"></svg:path>`,
})
export class MageTrash2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
