import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAngryFilledIcon],svg[tdesign-angry-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zM11.999 13a5 5 0 0 0-4.33 2.5l-.5.865l1.73 1.001l.502-.866C9.92 15.601 10.89 15 12 15s2.079.601 2.6 1.5l.5.866l1.731-1.001l-.5-.866A5 5 0 0 0 12 13"></svg:path>`,
})
export class TdesignAngryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
