import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextRotationDownIcon],svg[material-symbols-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 21l-3.5-3.45l1.45-1.4L5 17.2V4h2v13.2l1.05-1.05l1.4 1.4zm4-3.9v-1.9l2.8-.95V9.8l-2.8-1V6.9L21 11v2zm4.4-3.45l4.55-1.6v-.1l-4.55-1.6z"></svg:path>`,
})
export class MaterialSymbolsTextRotationDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
