import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitDownIcon],svg[formkit-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"></svg:path>`,
})
export class FormkitDownIcon {
  readonly viewBox = input("0 0 16 7")
  readonly width = input("2.29em")
  readonly height = input("1em")
}
