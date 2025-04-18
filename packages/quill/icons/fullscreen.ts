import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillFullscreenIcon],svg[quill-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v3.5a.5.5 0 0 0 .5.5H7M3 11V7.5a.5.5 0 0 1 .5-.5H7m18 0h3.5a.5.5 0 0 1 .5.5V11m0 10v3.5a.5.5 0 0 1-.5.5H25"></svg:path>`,
})
export class QuillFullscreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
