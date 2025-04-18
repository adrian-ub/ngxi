import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPreviousIcon],svg[tdesign-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 4.336v15.328L9.586 12zM8.5 5v14h-2V5zm3.914 7l2.836 2.836V9.164z"></svg:path>`,
})
export class TdesignPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
