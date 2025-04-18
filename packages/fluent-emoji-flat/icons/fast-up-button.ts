import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFastUpButtonIcon],svg[fluent-emoji-flat-fast-up-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M16.72 6.749a1 1 0 0 0-1.44 0l-6.31 6.558c-.612.635-.162 1.693.72 1.693h5.348l-6.069 6.307c-.611.635-.16 1.693.72 1.693H22.31c.882 0 1.332-1.058.72-1.693L16.963 15h5.348c.882 0 1.332-1.058.72-1.693z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFastUpButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
