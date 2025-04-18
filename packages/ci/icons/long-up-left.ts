import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLongUpLeftIcon],svg[ci-long-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.45 7.021L12 7.014V5H5v7h2.014l.007-3.55L17.571 19L19 17.571L8.45 7.021Z"></svg:path>`,
})
export class CiLongUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
