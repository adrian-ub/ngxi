import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAttachOutlineIcon],svg[teenyicons-attach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m13.5 7.5l-5.757 5.757a4.243 4.243 0 0 1-6-6l5.929-5.929a2.828 2.828 0 0 1 4 4l-5.758 5.758a1.414 1.414 0 0 1-2-2L9.5 3.5"></svg:path>`,
})
export class TeenyiconsAttachOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
