import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpArchiveIcon],svg[ic-sharp-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.71 3H5.29L3 5.79V21h18V5.79zM12 17.5L6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"></svg:path>`,
})
export class IcSharpArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
