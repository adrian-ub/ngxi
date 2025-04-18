import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSwear2FilledIcon],svg[tdesign-swear-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5c0-1.048.644-1.5 1-1.5c.355 0 1 .452 1 1.5s-.645 1.5-1 1.5c-.356 0-1-.452-1-1.5"></svg:path><svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zm-2.77.134c-1.853 0-3 1.787-3 3.5s1.147 3.5 3 3.5c1.854 0 3-1.787 3-3.5S13.854 12 12 12"></svg:path>`,
})
export class TdesignSwear2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
