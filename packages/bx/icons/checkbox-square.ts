import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCheckboxSquareIcon],svg[bx-checkbox-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h6v6H9z"></svg:path><svg:path fill="currentColor" d="M19 17V7c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2M7 7h10l.002 10H7z"></svg:path>`,
})
export class BxCheckboxSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
