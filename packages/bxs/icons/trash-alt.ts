import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsTrashAltIcon],svg[bxs-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></svg:path>`,
})
export class BxsTrashAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
