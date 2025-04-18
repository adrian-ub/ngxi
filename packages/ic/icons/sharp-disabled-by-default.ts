import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDisabledByDefaultIcon],svg[ic-sharp-disabled-by-default-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm14 12.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z"></svg:path>`,
})
export class IcSharpDisabledByDefaultIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
