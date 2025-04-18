import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSmileSlight24FilledIcon],svg[fluent-emoji-smile-slight-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.002 12.002C22.002 6.478 17.524 2 12 2S2 6.478 2 12.002c0 5.523 4.477 10.001 10.001 10.001s10.002-4.478 10.002-10.001m-14.25-2a1.25 1.25 0 1 1 2.498 0a1.25 1.25 0 0 1-2.499 0m6 0a1.25 1.25 0 1 1 2.498 0a1.25 1.25 0 0 1-2.499 0m-3.616 5.106c.483.29 1.155.455 1.864.455s1.381-.165 1.864-.455a.75.75 0 1 1 .772 1.286c-.767.46-1.72.67-2.636.67s-1.869-.21-2.636-.67a.75.75 0 1 1 .772-1.286"></svg:path>`,
})
export class FluentEmojiSmileSlight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
