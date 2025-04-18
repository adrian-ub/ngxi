import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastOphiuchusIcon],svg[fluent-emoji-high-contrast-ophiuchus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 7a1 1 0 0 1 1 1v4.363c.683.06 1.366.211 2.031.46l6.64 2.49c.436.164.882.271 1.329.324V8a1 1 0 1 1 2 0v7.516a5.67 5.67 0 0 0 3.2-2.107a1 1 0 0 1 1.6 1.202a7.67 7.67 0 0 1-4.8 2.947V18c0 3.862-3.138 7-7 7s-7-3.138-7-7v-3.506a5.67 5.67 0 0 0-3.2 2.107A1 1 0 1 1 4.2 15.4A7.67 7.67 0 0 1 9 12.452V8a1 1 0 0 1 1-1m1 7.373V18c0 2.758 2.242 5 5 5s5-2.242 5-5v-.353a7.7 7.7 0 0 1-2.031-.46l-6.64-2.49A5.7 5.7 0 0 0 11 14.372"></svg:path><svg:path d="M1 6a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastOphiuchusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
