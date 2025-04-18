import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBackwardFilledIcon],svg[tdesign-backward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 4.336v7l7-7v15.328l-7-7v7L3.586 12z"></svg:path>`,
})
export class TdesignBackwardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
