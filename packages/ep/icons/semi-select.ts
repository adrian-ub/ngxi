import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epSemiSelectIcon],svg[ep-semi-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64"></svg:path>`,
})
export class EpSemiSelectIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
