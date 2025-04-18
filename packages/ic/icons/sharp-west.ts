import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWestIcon],svg[ic-sharp-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7z"></svg:path>`,
})
export class IcSharpWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
