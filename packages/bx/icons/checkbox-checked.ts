import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCheckboxCheckedIcon],svg[bx-checkbox-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm0 12V7h10l.002 10z"></svg:path><svg:path fill="currentColor" d="M10.996 12.556L9.7 11.285l-1.4 1.43l2.704 2.647l4.699-4.651l-1.406-1.422z"></svg:path>`,
})
export class BxCheckboxCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
