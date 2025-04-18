import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDoorFrontIcon],svg[ic-sharp-door-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V3H5v16H3v2h18v-2zm-4-6h-2v-2h2z"></svg:path>`,
})
export class IcSharpDoorFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
