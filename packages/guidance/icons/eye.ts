import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceEyeIcon],svg[guidance-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6.106 7.053a8.08 8.08 0 0 1 11.788 0L20.5 10c1 1 2.224 2 3.5 2c-1.276 0-2.5 1-3.5 2l-2.606 2.947a8.08 8.08 0 0 1-11.788 0L3.5 14c-1-1-2.224-2-3.5-2c1.276 0 2.5-1 3.5-2z"></svg:path><svg:path d="M9.5 12a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Z"></svg:path></svg:g>`,
})
export class GuidanceEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
