import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBorderOuterIcon],svg[zondicons-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19H1V1h18v18zm1-2h14V3H3zm10-8h2v2h-2zM9 9h2v2H9zM5 9h2v2H5zm4-4h2v2H9zm0 8h2v2H9z"></svg:path>`,
})
export class ZondiconsBorderOuterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
