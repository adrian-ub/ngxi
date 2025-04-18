import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFastReverseButtonIcon],svg[fluent-emoji-flat-fast-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M6.749 15.28a1 1 0 0 0 0 1.44l6.558 6.31c.635.612 1.693.162 1.693-.72v-5.348l6.307 6.069c.635.611 1.693.16 1.693-.72V9.69c0-.882-1.058-1.332-1.693-.72L15 15.037V9.69c0-.882-1.058-1.332-1.693-.72z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFastReverseButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
