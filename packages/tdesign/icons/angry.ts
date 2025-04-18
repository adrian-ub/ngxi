import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAngryIcon],svg[tdesign-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5.769-3.866l3.464 2l-1 1.732l-3.464-2zm11.464 1.732l-3.464 2l-1-1.732l3.464-2zM7.67 15.499A5 5 0 0 1 12 13a5 5 0 0 1 4.33 2.5l.501.865l-1.731 1.001l-.5-.865A3 3 0 0 0 12 15a3 3 0 0 0-2.6 1.5l-.5.866l-1.731-1.001z"></svg:path>`,
})
export class TdesignAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
