import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillSoundIcon],svg[quill-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12v8a1 1 0 0 0 1 1h7l6.586 6.586c1.26 1.26 3.414.367 3.414-1.414V5.828c0-1.781-2.154-2.674-3.414-1.414L15 11H8a1 1 0 0 0-1 1"></svg:path>`,
})
export class QuillSoundIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
