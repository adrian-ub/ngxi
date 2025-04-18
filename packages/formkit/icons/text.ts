import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitTextIcon],svg[formkit-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 4h-8c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8c.28 0 .5.22.5.5s-.22.5-.5.5m4 3h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path><svg:path fill="currentColor" d="M5.5 14c-.28 0-.5-.22-.5-.5V3.55c0-.28.22-.5.5-.5s.5.22.5.5v9.95c0 .28-.22.5-.5.5m5 0c-.28 0-.5-.22-.5-.5V6.55c0-.28.22-.5.5-.5s.5.22.5.5v6.95c0 .28-.22.5-.5.5"></svg:path>`,
})
export class FormkitTextIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
