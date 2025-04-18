import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCopyOIcon],svg[vaadin-copy-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h-3L7 0H0v13h6v3h10V6zM7 1l2 2H7zM1 12V1h5v3h3v8zm14 3H7v-2h3V4h2v3h3zm-2-9V4l2 2z"></svg:path>`,
})
export class VaadinCopyOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
