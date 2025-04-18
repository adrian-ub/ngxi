import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLoaderIcon],svg[bx-loader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414l3.536 3.536l-1.414 1.414zm15.556 12.728l-1.414 1.414l-3.536-3.536l1.414-1.414zm-12.02-3.536l1.414 1.414l-3.536 3.536l-1.414-1.414zm7.07-7.071l3.536-3.535l1.414 1.415l-3.536 3.535z"></svg:path>`,
})
export class BxLoaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
