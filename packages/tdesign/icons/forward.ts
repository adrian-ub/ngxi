import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignForwardIcon],svg[tdesign-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 4.336v7l-7-7v15.328l7-7v7L20.414 12zM17.586 12l-2.836 2.836V9.164zm-7 0L7.75 14.836V9.164z"></svg:path>`,
})
export class TdesignForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
