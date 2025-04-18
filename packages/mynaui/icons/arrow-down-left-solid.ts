import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftSolidIcon],svg[mynaui-arrow-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 18.25a.75.75 0 0 0 .75-.75l-4.345-4.345L18.03 7.03a.75.75 0 0 0-1.06-1.06l-6.125 6.125L6.5 7.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75z"></svg:path>`,
})
export class MynauiArrowDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
