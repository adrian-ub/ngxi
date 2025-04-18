import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfBottomBoldIcon],svg[ph-square-half-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v56H60V60Zm-80 80v56h-16v-56Zm24 0h16v56h-16Zm-80 0h16v56H60Zm120 56v-56h16v56Z"></svg:path>`,
})
export class PhSquareHalfBottomBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
