import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDownWideLineIcon],svg[ri-arrow-down-wide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.632l8.968-4.748l-.936-1.768L12 13.368L3.968 9.116l-.936 1.768z"></svg:path>`,
})
export class RiArrowDownWideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
