import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileBlockedFilledIcon],svg[tdesign-mobile-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v2.29A7 7 0 0 0 18 3H6v14h12c.695 0 1.366-.101 2-.29V23H4zm9.004 18H11v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M18 4.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M14.5 10a3.5 3.5 0 0 1 5.165-3.08l-4.744 4.745A3.5 3.5 0 0 1 14.5 10m1.835 3.08l4.744-4.745a3.5 3.5 0 0 1-4.745 4.745"></svg:path>`,
})
export class TdesignMobileBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
