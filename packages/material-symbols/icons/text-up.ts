import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextUpIcon],svg[material-symbols-text-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-2h10v2zm4-4V8.8l-1.6 1.6L12 9l4-4l4 4l-1.4 1.4L17 8.8V15zM3 15l3.4-9H8l3.4 9H9.85l-.8-2.3H5.4L4.6 15zm2.85-3.6h2.7l-1.3-3.75h-.1z"></svg:path>`,
})
export class MaterialSymbolsTextUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
