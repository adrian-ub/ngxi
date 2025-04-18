import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextRotateVerticalIcon],svg[material-symbols-text-rotate-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.9 16L15 5h2l4.1 11h-1.9l-1-2.8h-4.4l-1 2.8zm3.45-4.4h3.3l-1.6-4.55h-.1zM6 20l-3.5-3.5l1.4-1.4L5 16.15V3h2v13.15l1.1-1.05l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsTextRotateVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
