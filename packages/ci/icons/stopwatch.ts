import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciStopwatchIcon],svg[ci-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Zm0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6Zm1 7h-2V9h2v5Zm6.293-6.293l-2-2l1.414-1.414l2 2l-1.413 1.413l-.001.001ZM15 4H9V2h6v2Z"></svg:path>`,
})
export class CiStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
