import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneExplicitIcon],svg[ic-twotone-explicit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zM9 7h6v2h-4v2h4v2h-4v2h4v2H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-2 0H5V5h14zm-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z"></svg:path>`,
})
export class IcTwotoneExplicitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
