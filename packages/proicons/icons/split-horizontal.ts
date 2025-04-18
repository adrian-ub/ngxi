import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSplitHorizontalIcon],svg[proicons-split-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 7.25a3.5 3.5 0 0 0-3.5-3.5h-9.5a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h9.5a3.5 3.5 0 0 0 3.5-3.5zM12 3.75v16.5"></svg:path>`,
})
export class ProiconsSplitHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
