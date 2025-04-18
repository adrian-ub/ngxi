import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPublishIcon],svg[ic-sharp-publish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z"></svg:path>`,
})
export class IcSharpPublishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
