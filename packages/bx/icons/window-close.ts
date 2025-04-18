import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxWindowCloseIcon],svg[bx-window-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 19V7h16l.001 12z"></svg:path><svg:path fill="currentColor" d="m15.707 10.707l-1.414-1.414L12 11.586L9.707 9.293l-1.414 1.414L10.586 13l-2.293 2.293l1.414 1.414L12 14.414l2.293 2.293l1.414-1.414L13.414 13z"></svg:path>`,
})
export class BxWindowCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
