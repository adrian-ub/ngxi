import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSouthEastEscapeAltLineIcon],svg[si-south-east-escape-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 10l8 8m0 0v-4m0 4h-4m-5-3h-.6C7.07 15 6 13.93 6 12.6V8.4C6 7.07 7.07 6 8.4 6h4.2C13.93 6 15 7.07 15 8.4V9"></svg:path>`,
})
export class SiSouthEastEscapeAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
