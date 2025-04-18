import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFlatShoeIcon],svg[fluent-emoji-high-contrast-flat-shoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 28h1.97a1.32 1.32 0 0 1 1.28 1c.147.588.675 1 1.28 1H29.5c.276 0 .5-.224.498-.5c-.016-1.724-.19-3.096-1.998-4c-1.318-.66-2.854-1.101-3.747-1.326a1.87 1.87 0 0 0-1.416.224L21 25.5l-1.152.288a3 3 0 0 1-1.677-.064L4.142 21.047A1 1 0 0 0 3.85 21A1.85 1.85 0 0 0 2 22.85v6.65a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class FluentEmojiHighContrastFlatShoeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
