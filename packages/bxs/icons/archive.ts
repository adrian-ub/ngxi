import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsArchiveIcon],svg[bxs-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.704 5.29l-2.997-2.997A1 1 0 0 0 18 2H6a1 1 0 0 0-.707.293L2.296 5.29A1 1 0 0 0 2 5.999V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5.999a1 1 0 0 0-.296-.709M6.414 4h11.172l1 1H5.414zM17 13v1H7v-4h2v2h6v-2h2z"></svg:path>`,
})
export class BxsArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
