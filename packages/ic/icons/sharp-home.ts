import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHomeIcon],svg[ic-sharp-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></svg:path>`,
})
export class IcSharpHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
