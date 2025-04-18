import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCursorIcon],svg[tdesign-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.108 3.114l16.864 5.925l-4.319 3.084l5.707 5.706l-3.536 3.536l-5.706-5.706l-3.085 4.318zm3.269 3.268l3.267 9.3l2.219-3.107l5.96 5.961l.708-.707l-5.961-5.961l3.106-2.219z"></svg:path>`,
})
export class TdesignCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
