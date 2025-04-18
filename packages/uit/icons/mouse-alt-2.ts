import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitMouseAlt2Icon],svg[uit-mouse-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v6a7.01 7.01 0 0 0 7 7a7.01 7.01 0 0 0 7-7V9a7 7 0 0 0-7-7m6 13a6 6 0 1 1-12 0V9a6.004 6.004 0 0 1 5.5-5.974V12.5a.5.5 0 1 0 1 0V3.026A6.004 6.004 0 0 1 18 9z"></svg:path>`,
})
export class UitMouseAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
