import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBatteryHalfIcon],svg[si-glyph-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7 13.448c0 .281.272.511.529.511h3.912c.255 0 .559-.229.559-.511V5.069L7 8.281z"></svg:path><svg:path d="M12.252 1H11V.016H8.023V1H6.715c-.936 0-1.694.575-1.694 1.5v11.825c0 .924.759 1.675 1.694 1.675h5.536c.936 0 1.694-.751 1.694-1.675V2.5c.001-.925-.757-1.5-1.693-1.5M13 14c0 .516-.484 1-1 1H7c-.515 0-1-.484-1-1V3c0-.514.485-1.051 1-1.051h5c.516 0 1 .536 1 1.051z"></svg:path></svg:g>`,
})
export class SiGlyphBatteryHalfIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
