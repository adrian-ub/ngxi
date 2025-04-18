import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitUpIcon],svg[formkit-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 6a.47.47 0 0 1-.35-.15L8 1.71L3.85 5.85c-.2.2-.51.2-.71 0s-.2-.51 0-.71L7.65.65c.2-.2.51-.2.71 0l4.5 4.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"></svg:path>`,
})
export class FormkitUpIcon {
  readonly viewBox = input("0 0 16 7")
  readonly width = input("2.29em")
  readonly height = input("1em")
}
