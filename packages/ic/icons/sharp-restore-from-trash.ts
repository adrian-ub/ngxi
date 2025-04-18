import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRestoreFromTrashIcon],svg[ic-sharp-restore-from-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21h12V7H6zm6-11l4 4h-2v4h-4v-4H8zm3.5-6l-1-1h-5l-1 1H5v2h14V4z"></svg:path>`,
})
export class IcSharpRestoreFromTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
