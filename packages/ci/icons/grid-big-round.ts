import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciGridBigRoundIcon],svg[ci-grid-big-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-8 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm8-8a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-8 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class CiGridBigRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
