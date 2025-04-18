import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPoutFilledIcon],svg[tdesign-pout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zm.23 5.267V14h-2v.867l-3.867-.484l-.248 1.985z"></svg:path>`,
})
export class TdesignPoutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
