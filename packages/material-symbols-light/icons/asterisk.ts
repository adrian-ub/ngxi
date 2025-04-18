import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAsteriskIcon],svg[material-symbols-light-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20v-6.792l-4.804 4.81l-.713-.714l4.81-4.804H4v-1h6.792l-4.81-4.804l.714-.694l4.804 4.81V4h1v6.812l4.804-4.81l.694.694l-4.81 4.804H20v1h-6.812l4.81 4.804l-.694.713l-4.804-4.81V20z"></svg:path>`,
})
export class MaterialSymbolsLightAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
