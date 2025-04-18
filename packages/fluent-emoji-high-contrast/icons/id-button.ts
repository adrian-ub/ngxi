import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastIdButtonIcon],svg[fluent-emoji-high-contrast-id-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.006 9.163c0-.76.616-1.375 1.375-1.375h3.305c4.551 0 8.278 3.637 8.278 8.17c0 4.531-3.727 8.169-8.278 8.169H14.38c-.76 0-1.375-.616-1.375-1.375zm2.75 12.089c0 .069.056.125.125.125h1.805c3.074 0 5.528-2.447 5.528-5.42s-2.454-5.42-5.528-5.42H15.88a.125.125 0 0 0-.125.126zM9.385 7.89a1.374 1.374 0 0 1 1.377 1.373l.014 13.385a1.375 1.375 0 0 1-2.75.003L8.012 9.266a1.375 1.375 0 0 1 1.373-1.377"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastIdButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
