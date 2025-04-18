import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiEdit24FilledIcon],svg[fluent-emoji-edit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.998c5.27 0 9.59 4.077 9.973 9.25a3.29 3.29 0 0 0-3.58.713l-2.636 2.636a.8.8 0 0 0-.223.19q-.08.102-.167.2l-.383.383A4.5 4.5 0 0 1 12 16.501a4.49 4.49 0 0 1-3.539-1.718a.75.75 0 0 0-1.178.928a5.99 5.99 0 0 0 5.087 2.279c-.409.45-.701.994-.85 1.586l-.457 1.83a2 2 0 0 0-.064.546A10 10 0 0 1 2 12C1.999 6.476 6.477 1.998 12 1.998M9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75m6 0a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499m4.1 3.919l-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902a2.286 2.286 0 0 0-3.232-3.232"></svg:path>`,
})
export class FluentEmojiEdit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
