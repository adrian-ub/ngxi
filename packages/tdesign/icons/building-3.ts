import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding3Icon],svg[tdesign-building-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v3h3v4h3v13H2V9h3V5h3zm2 3h4V4h-4zM7 9h10V7H7zm-3 2v9h4v-6h8v6h4v-9zm10 9v-4h-4v4z"></svg:path>`,
})
export class TdesignBuilding3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
