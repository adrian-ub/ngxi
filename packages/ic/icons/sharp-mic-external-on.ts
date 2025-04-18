import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMicExternalOnIcon],svg[ic-sharp-mic-external-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.22 7H4.78C4.3 6.47 4 5.77 4 5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .77-.3 1.47-.78 2M20 2v20h-2V4h-4v18H6v-4H5L4 8h6L9 18H8v2h4V2z"></svg:path>`,
})
export class IcSharpMicExternalOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
