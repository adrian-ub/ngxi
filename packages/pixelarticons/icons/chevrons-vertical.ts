import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChevronsVerticalIcon],svg[pixelarticons-chevrons-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v2h-2zM9 8V6h2v2zm0 0v2H7V8zm6 0h-2V6h2zm0 0h2v2h-2zm-6 8H7v-2h2zm2 2H9v-2h2zm2 0v2h-2v-2zm2-2h-2v2h2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsChevronsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
