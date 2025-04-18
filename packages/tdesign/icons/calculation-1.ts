import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculation1Icon],svg[tdesign-calculation-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v22H1zm2 2v18h18V3zm6 2v2h2v2H9v2H7V9H5V7h2V5zm4 2h6v2h-6zm-6.414 6.172L8 14.586l1.414-1.414l1.414 1.414L9.414 16l1.415 1.414l-1.415 1.415L8 17.414L6.586 18.83L5.17 17.414L6.586 16l-1.414-1.414zM13 13.5h6v2h-6zm0 3h6v2h-6z"></svg:path>`,
})
export class TdesignCalculation1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
