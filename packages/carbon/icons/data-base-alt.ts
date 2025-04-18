import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataBaseAltIcon],svg[carbon-data-base-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h5v2H7zm0 4h5v2H7zm0 4h5v2H7zm13-8h5v2h-5zm0 4h5v2h-5zm0 4h5v2h-5z"></svg:path><svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 6h11v22H4Zm13 22V6h11v22Z"></svg:path>`,
})
export class CarbonDataBaseAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
