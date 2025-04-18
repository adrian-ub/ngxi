import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRam2LineIcon],svg[ri-ram-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a1 1 0 0 0 1 1h7.414l1-1h1.172l1 1H21a1 1 0 0 0 1-1v-2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm18 11v1h-5.586l-1-1zm-9.414 0l-1 1H4v-1zM3 14V7h18v7zm2-5h2v3H5zm6 0H9v3h2zm2 0h2v3h-2zm6 0h-2v3h2z"></svg:path>`,
})
export class RiRam2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
