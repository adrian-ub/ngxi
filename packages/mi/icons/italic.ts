import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miItalicIcon],svg[mi-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.021 4H19a1 1 0 1 1 0 2h-4.246l-3.428 12H15a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h4.246l3.428-12H9a1 1 0 0 1 0-2z"></svg:path>`,
})
export class MiItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
