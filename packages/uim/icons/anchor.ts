import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAnchorIcon],svg[uim-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a8.01 8.01 0 0 1-8-8a1 1 0 0 1 2 0a6 6 0 0 0 12 0a1 1 0 0 1 2 0a8.01 8.01 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M12 22a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1m-5-7H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" d="M14 11h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m-2-3a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UimAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
