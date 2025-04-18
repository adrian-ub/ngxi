import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFlatbreadIcon],svg[fluent-emoji-high-contrast-flatbread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m6.69 17.07l.18.18c.24.25.63.25.88 0l9.51-9.51c.24-.24.24-.64 0-.88l-.18-.18a.63.63 0 0 0-.88 0l-9.51 9.51c-.24.24-.24.64 0 .88m1.41 5.77c-.29.29-.29.77 0 1.06s.77.29 1.06 0L23.9 9.16c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0zm6.83 2.48l-.18-.18a.63.63 0 0 1 0-.88l9.51-9.51c.24-.24.64-.24.88 0l.18.18c.24.24.24.64 0 .88l-9.51 9.51c-.25.24-.64.24-.88 0"></svg:path><svg:path d="M15 1C7.268 1 1 7.268 1 15v2c0 7.732 6.268 14 14 14h2c7.732 0 14-6.268 14-14v-2c0-7.732-6.268-14-14-14zM3 15C3 8.373 8.373 3 15 3h2c6.627 0 12 5.373 12 12v2c0 6.627-5.373 12-12 12h-2C8.373 29 3 23.627 3 17z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastFlatbreadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
