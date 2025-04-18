import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculation1FilledIcon],svg[tdesign-calculation-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1v22H1V1zM9 7V5H7v2H5v2h2v2h2V9h2V7zm10 0h-6v2h6zM8 14.586l-1.414-1.414l-1.414 1.414L6.586 16L5.17 17.414l1.415 1.415L8 17.414l1.414 1.415l1.415-1.415L9.414 16l1.414-1.414l-1.414-1.414zM19 13.5h-6v2h6zm0 3h-6v2h6z"></svg:path>`,
})
export class TdesignCalculation1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
