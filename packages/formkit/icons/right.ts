import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitRightIcon],svg[formkit-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"></svg:path>`,
})
export class FormkitRightIcon {
  readonly viewBox = input("0 0 7 16")
  readonly width = input("0.44em")
  readonly height = input("1em")
}
