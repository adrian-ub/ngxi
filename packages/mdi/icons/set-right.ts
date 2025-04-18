import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSetRightIcon],svg[mdi-set-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19c-1.04 0-2.06-.24-3-.68c-.94.44-1.96.68-3 .68a7 7 0 0 1-7-7a7 7 0 0 1 7-7c1.04 0 2.06.24 3 .68c.94-.44 1.96-.68 3-.68a7 7 0 0 1 7 7a7 7 0 0 1-7 7m-6-2l1-.11c-1.28-1.3-2-3.06-2-4.89s.72-3.59 2-4.9L9 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5m3-1c1.26-.95 2-2.43 2-4s-.74-3.05-2-4c-1.26.95-2 2.43-2 4s.74 3.05 2 4"></svg:path>`,
})
export class MdiSetRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
