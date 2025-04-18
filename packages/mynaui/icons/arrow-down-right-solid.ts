import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightSolidIcon],svg[mynaui-arrow-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 18.25a.75.75 0 0 1-.75-.75l4.345-4.345L5.97 7.03a.75.75 0 0 1 1.06-1.06l6.125 6.125L17.5 7.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class MynauiArrowDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
