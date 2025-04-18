import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVercelLineIcon],svg[ri-vercel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 21.648L12 2.352L1 21.648zm-3.442-2H4.442L12 6.39z"></svg:path>`,
})
export class RiVercelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
