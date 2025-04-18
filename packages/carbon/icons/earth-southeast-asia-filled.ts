import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEarthSoutheastAsiaFilledIcon],svg[carbon-earth-southeast-asia-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22h2v2h-2zm0-4h2v2h-2zm-3 6h3v2h-3z"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2M4.7 20H6l4.177 2.6a1 1 0 0 0 1.36-.294l1.008-1.512a1 1 0 0 0-.125-1.261L10 17.112L11 14h5.323a1 1 0 0 0 .929-.628l1.581-3.955a1 1 0 0 0-.034-.819l-2.286-4.572A11.965 11.965 0 0 1 26.376 22H23a1 1 0 0 0-1 1v3.377A11.958 11.958 0 0 1 4.7 20"></svg:path>`,
})
export class CarbonEarthSoutheastAsiaFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
