import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillStackAltIcon],svg[quill-stack-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 15.5l13 6l13-6M3 20l13 6l13-6M3 11l13 6l13-6l-13-6z"></svg:path>`,
})
export class QuillStackAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
