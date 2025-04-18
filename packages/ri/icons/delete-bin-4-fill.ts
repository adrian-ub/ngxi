import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeleteBin4FillIcon],svg[ri-delete-bin-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2zm-9 3v7h2v-7zM7 2h10v2H7z"></svg:path>`,
})
export class RiDeleteBin4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
