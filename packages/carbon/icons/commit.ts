import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCommitIcon],svg[carbon-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-8.09a5.993 5.993 0 0 0-11.82 0H2v2h8.09a5.993 5.993 0 0 0 11.82 0H30Zm-14 5a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonCommitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
