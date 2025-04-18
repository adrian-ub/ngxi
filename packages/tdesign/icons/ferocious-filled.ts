import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFerociousFilledIcon],svg[tdesign-ferocious-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zm1.23 5.234v-4.31l-8.186 1.56l.092 1.978z"></svg:path>`,
})
export class TdesignFerociousFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
