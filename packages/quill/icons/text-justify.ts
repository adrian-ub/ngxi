import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillTextJustifyIcon],svg[quill-text-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h22M5 13h22M5 19h22M5 25h22"></svg:path>`,
})
export class QuillTextJustifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
