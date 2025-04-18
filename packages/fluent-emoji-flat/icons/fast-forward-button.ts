import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFastForwardButtonIcon],svg[fluent-emoji-flat-fast-forward-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="m17 16.962l-6.307 6.069c-.635.611-1.693.16-1.693-.72V9.69c0-.882 1.058-1.332 1.693-.72L17 15.037V9.69c0-.882 1.058-1.332 1.693-.72l6.558 6.31a1 1 0 0 1 0 1.44l-6.558 6.31c-.635.612-1.693.162-1.693-.72z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFastForwardButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
