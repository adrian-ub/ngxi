import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLiveTvIcon],svg[ic-sharp-live-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6h-9.59l3.29-3.29L16 2l-4 4l-4-4l-.71.71L10.59 6H1v16h22zm-2 14H3V8h18zM9 10v8l7-4z"></svg:path>`,
})
export class IcSharpLiveTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
