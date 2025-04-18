import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBackspaceReverseIcon],svg[mdi-backspace-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21h15c.7 0 1.2-.4 1.6-.9L24 12l-5.4-8.1c-.4-.5-.9-.9-1.6-.9H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2M5 8.4L6.4 7l3.6 3.6L13.6 7L15 8.4L11.4 12l3.6 3.6l-1.4 1.4l-3.6-3.6L6.4 17L5 15.6L8.6 12"></svg:path>`,
})
export class MdiBackspaceReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
