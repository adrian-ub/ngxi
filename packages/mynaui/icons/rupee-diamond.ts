import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeDiamondIcon],svg[mynaui-rupee-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M9 7.5h6m-6 2.778h6M13.25 17.5L9 13.056h1.5c3.334 0 3.334-5.556 0-5.556"></svg:path></svg:g>`,
})
export class MynauiRupeeDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
