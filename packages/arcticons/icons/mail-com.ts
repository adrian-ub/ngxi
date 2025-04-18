import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMailComIcon],svg[arcticons-mail-com-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.925 18.103a6.04 6.04 0 0 1 6.037-6.038h0A6.04 6.04 0 0 1 24 18.103v9.962m-12.075-16v16M24 18.103a6.04 6.04 0 0 1 6.038-6.038h0a6.04 6.04 0 0 1 6.037 6.038v9.962"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.285 41.741L8.878 35.02a3 3 0 0 1-2.372-2.933V8a2 2 0 0 1 2-2h28.988a4 4 0 0 1 4 4v30.763a1 1 0 0 1-1.21.978"></svg:path>`,
})
export class ArcticonsMailComIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
