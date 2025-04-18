import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeFontSizeIcon],svg[icomoon-free-font-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8h6v2H5v6H3v-6H1zm14-4h-3.934v12H8.933V4H4.999V2h10z"></svg:path>`,
})
export class IcomoonFreeFontSizeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
