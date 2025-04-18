import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCompressIcon],svg[vaadin-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.3 9.3l-5 5l1.4 1.4l5-5L8 12V8H4zm10.4-7.6L14.3.3l-4 4L9 3v4h4l-1.3-1.3z"></svg:path>`,
})
export class VaadinCompressIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
