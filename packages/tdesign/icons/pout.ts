import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPoutIcon],svg[tdesign-pout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5.769-3.866l3.464 2l-1 1.732l-3.464-2zm11.464 1.732l-3.464 2l-1-1.732l3.464-2zM15 14v3.133l-6.116-.765l.248-1.984l3.868.483V14z"></svg:path>`,
})
export class TdesignPoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
