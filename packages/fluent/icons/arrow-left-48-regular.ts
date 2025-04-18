import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowLeft48RegularIcon],svg[fluent-arrow-left-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 24c0 .69-.56 1.25-1.25 1.25H10.304l12.822 12.609a1.25 1.25 0 1 1-1.752 1.782L6.386 24.903l-.027-.027a1.25 1.25 0 0 1-.352-1.008a1.25 1.25 0 0 1 .393-.785L21.374 8.359a1.25 1.25 0 1 1 1.752 1.782L10.304 22.75H42.75c.69 0 1.25.56 1.25 1.25"></svg:path>`,
})
export class FluentArrowLeft48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
