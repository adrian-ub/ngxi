import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCapsLockIcon],svg[mdi-caps-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.96 13.71L12 8.29l2.03 5.43M11.14 6L6.43 18h1.93l.96-2.57h5.36l.96 2.57h1.93L12.86 6zM20 2H4c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 18H4V4h16z"></svg:path>`,
})
export class MdiCapsLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
