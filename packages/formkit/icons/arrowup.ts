import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitArrowupIcon],svg[formkit-arrowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 14c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"></svg:path><svg:path fill="currentColor" d="M8 7.5a.47.47 0 0 1-.35-.15L4.5 4.2L1.35 7.35c-.2.2-.51.2-.71 0s-.2-.51 0-.71l3.5-3.5c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15"></svg:path>`,
})
export class FormkitArrowupIcon {
  readonly viewBox = input("0 0 9 16")
  readonly width = input("0.57em")
  readonly height = input("1em")
}
