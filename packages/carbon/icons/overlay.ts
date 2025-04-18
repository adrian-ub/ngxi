import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonOverlayIcon],svg[carbon-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-4V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 22V4h18v4H10a2 2 0 0 0-2 2v12Zm18 0h-2.586L10 12.586V10h2.586L22 19.416Zm-12-6.586L16.586 22H10Zm12.001 1.173L15.414 10H22ZM10 28v-4h12a2 2 0 0 0 2-2V10h4v18Z"></svg:path>`,
})
export class CarbonOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
