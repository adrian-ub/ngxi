import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMergeIcon],svg[picon-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c4 4-5 4-1 0V3c-4-4 5-4 1 0M1 6v1h1V6m4 0v1h1V6M1 1v1h1V1m0 2L1 2l6 3c4 4-5 4-1 0"></svg:path>`,
})
export class PiconMergeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
