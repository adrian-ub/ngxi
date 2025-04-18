import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentGridFilledIcon],svg[tdesign-component-grid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 2.043H2v5.25h5.25zm2 0v5.25h5.5v-5.25zm7.5 0v5.25H22v-5.25zM22 9.293h-5.25v5.5H22zm0 7.5h-5.25v5.25H22zm-7.25 5.25v-5.25h-5.5v5.25zm-7.5 0v-5.25H2v5.25zM2 14.793h5.25v-5.5H2zm7.25 0v-5.5h5.5v5.5z"></svg:path>`,
})
export class TdesignComponentGridFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
