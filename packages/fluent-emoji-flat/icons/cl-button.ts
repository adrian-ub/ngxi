import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatClButtonIcon],svg[fluent-emoji-flat-cl-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F92F60" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M11.33 9.36a5.27 5.27 0 0 0-5.267 5.267v2.76a5.286 5.286 0 0 0 9.769 2.798l.022-.035a1.375 1.375 0 1 0-2.333-1.456l-.022.035a2.536 2.536 0 0 1-4.687-1.343v-2.76a2.518 2.518 0 0 1 4.668-1.308l.033.053a1.375 1.375 0 0 0 2.349-1.43l-.033-.054A5.27 5.27 0 0 0 11.33 9.36m9.42 1.374a1.375 1.375 0 1 0-2.75 0v10.532c0 .759.616 1.375 1.375 1.375h5.281a1.375 1.375 0 1 0 0-2.75H21a.25.25 0 0 1-.25-.25z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatClButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
