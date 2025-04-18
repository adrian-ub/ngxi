import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFortIcon],svg[ic-sharp-fort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-5h4v5h9v-4l-2-2V9l2-2V3z"></svg:path>`,
})
export class IcSharpFortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
