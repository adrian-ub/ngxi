import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillMailListIcon],svg[quill-mail-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m4 0h4M5 13h10m8 0h4M5 19h14m4 0h4M5 25h12m6 0h4"></svg:path>`,
})
export class QuillMailListIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
