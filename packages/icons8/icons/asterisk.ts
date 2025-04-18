import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8AsteriskIcon],svg[icons8-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.7 17l6.2 8.4l-2.4 1.6l-5.5-8.7l-5.5 8.7l-2.3-1.6l6.2-8.4l-9.3-2.4L6 12l9.1 3.2L14.5 5h3L17 15.2l9-3.2l.8 2.7z"></svg:path>`,
})
export class Icons8AsteriskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
