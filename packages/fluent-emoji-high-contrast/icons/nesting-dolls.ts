import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastNestingDollsIcon],svg[fluent-emoji-high-contrast-nesting-dolls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 8.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-1 0zm3 0a.5.5 0 0 1 1 0V9a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M9 14.5c-1.145 1.717-1.763 2.985-1.943 4.5H6a1 1 0 0 0-1 1v1a9 9 0 0 0 9 9h4a9 9 0 0 0 9-9v-1a1 1 0 0 0-1-1h-1.057c-.18-1.515-.798-2.783-1.943-4.5C22 13 21.5 10 21.5 9c0-2.333-.5-7-5.5-7s-5.5 4.667-5.5 7c0 1-.5 4-1.5 5.5M19.603 19H23v1a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-1h3.397c1.299-1.436 2.574-4.053 3.232-5.84c-.363.509-.957.84-1.629.84h-1.318a.18.18 0 0 1-.182-.182c0-1.004.814-1.818 1.818-1.818h3.364c1.004 0 1.818.814 1.818 1.818c0 .1-.081.182-.182.182H18a2 2 0 0 1-1.629-.84c.658 1.787 1.933 4.404 3.232 5.84M16 12a4 4 0 0 1-4-4a4 4 0 0 0 4-4a4 4 0 0 0 4 4a4 4 0 0 1-4 4"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastNestingDollsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
