import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsToggleLeftIcon],svg[pixelarticons-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16v2H4zm0 12H2V7h2zm16 0v2H4v-2zm0 0h2V7h-2zM10 9H6v6h4z"></svg:path>`,
})
export class PixelarticonsToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
