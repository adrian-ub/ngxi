import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epMoonIcon],svg[ep-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.448 240.448a384 384 0 1 0 559.424 525.696a448 448 0 0 1-542.016-542.08a391 391 0 0 0-17.408 16.384m181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696"></svg:path>`,
})
export class EpMoonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
