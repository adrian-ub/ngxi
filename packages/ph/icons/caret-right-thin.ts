import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretRightThinIcon],svg[ph-caret-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m178.83 130.83l-80 80a4 4 0 0 1-5.66-5.66L170.34 128L93.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhCaretRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
