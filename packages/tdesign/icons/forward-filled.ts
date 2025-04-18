import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignForwardFilledIcon],svg[tdesign-forward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 4.336v7l-7-7v15.328l7-7v7L20.414 12z"></svg:path>`,
})
export class TdesignForwardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
