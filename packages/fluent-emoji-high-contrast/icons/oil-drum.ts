import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastOilDrumIcon],svg[fluent-emoji-high-contrast-oil-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.02 2c.54 0 .98.44.98.98V4h1c.55 0 1 .45 1 1s-.45 1-1 1v6c.55 0 1 .45 1 1s-.45 1-1 1v6c.55 0 1 .45 1 1s-.45 1-1 1v6c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1v-6c-.55 0-1-.45-1-1s.45-1 1-1v-6c-.55 0-1-.45-1-1s.45-1 1-1V6c-.55 0-1-.45-1-1s.45-1 1-1h12V2.98c0-.54.44-.98.99-.98zM24 6h-2v6h2zm0 8h-2v6h2zm0 8h-2v6h2zm-3 6v-6h-1v6zm-1-8h1v-6h-1zm0-8h1V6h-1z"></svg:path>`,
})
export class FluentEmojiHighContrastOilDrumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
