import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWrySmileFilledIcon],svg[tdesign-wry-smile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M6.769 11.866l3.464-2l-1-1.732l-3.464 2zm11.464-1.732l-3.464-2l-1 1.732l3.464 2zM9.4 14.499l-.501-.866l-1.731 1.002l.5.866A5 5 0 0 0 12 18a5 5 0 0 0 4.331-2.5l.501-.865l-1.731-1.001l-.5.865c-.521.9-1.491 1.5-2.6 1.5a3 3 0 0 1-2.6-1.5"></svg:path>`,
})
export class TdesignWrySmileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
