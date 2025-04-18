import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackRightIcon],svg[mdi-hand-back-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 24c-3.26 0-6.19-2-7.4-5l-3.03-7.63a1 1 0 0 1 1.24-1.32l.79.26c.56.19 1.02.61 1.24 1.16L7.25 15H8V3.25a1.25 1.25 0 0 1 2.5 0V12h1V1.25a1.25 1.25 0 0 1 2.5 0V12h1V2.75a1.25 1.25 0 0 1 2.5 0V12h1V5.75a1.25 1.25 0 0 1 2.5 0V16c0 4.42-3.58 8-8 8"></svg:path>`,
})
export class MdiHandBackRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
