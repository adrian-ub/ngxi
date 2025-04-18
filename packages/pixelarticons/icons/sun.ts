import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSunIcon],svg[pixelarticons-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h-2v2h2zm4 2h2v2h-2zm-6 6h2v2h-2zm-8 0h2v2H3zm18 0h-2v2h2zM5 5h2v2H5zm14 14h-2v-2h2zm-8 2h2v-2h-2zm-4-2H5v-2h2zM9 7h6v2H9zm0 8H7V9h2zm0 0v2h6v-2h2V9h-2v6z"></svg:path>`,
})
export class PixelarticonsSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
