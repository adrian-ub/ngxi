import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOffIcon],svg[mdi-email-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l1.5 1.5Q2 5.1 2 6v12c0 1.1.9 2 2 2h14.1l2.7 2.7zM4 8V6l.3.2l5.3 5.3zm9.4 2.2L7.2 4H20c1.1 0 2 .9 2 2v12c0 .2 0 .5-.1.7l-7.3-7.3L20 8V6z"></svg:path>`,
})
export class MdiEmailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
