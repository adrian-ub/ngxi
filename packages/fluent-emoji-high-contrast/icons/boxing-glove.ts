import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastBoxingGloveIcon],svg[fluent-emoji-high-contrast-boxing-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 28.65c0 .194.14.35.312.35h4.376c.172 0 .312-.156.312-.35v-2.3c0-.194-.14-.35-.312-.35h-4.376c-.172 0-.312.156-.312.35z"></svg:path><svg:path d="m24 22.978l.742-.53l.003-.003a9.4 9.4 0 0 0 3.23-4.052a9.3 9.3 0 0 0 .745-3.554l.05-2.76v-.019a5.42 5.42 0 0 0-4.037-5.242A9 9 0 0 0 16 0h-3a9 9 0 0 0-9 9v7a8.98 8.98 0 0 0 3 6.708v6.341C7 30.509 8.118 32 9.861 32H21.14c1.78 0 2.86-1.534 2.86-2.951zM9 21.745A6.99 6.99 0 0 1 6 16V9a7 7 0 0 1 7-7h3a7 7 0 0 1 6.992 6.658H23V13.5a.5.5 0 0 0 1 0V8.702a3.42 3.42 0 0 1 2.77 3.358l-.05 2.75a7.3 7.3 0 0 1-.59 2.81a7.4 7.4 0 0 1-2.55 3.2L22 21.949V23H9zM9 25h13v4.049c0 .52-.38.951-.861.951H9.86c-.47 0-.861-.42-.861-.951z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastBoxingGloveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
