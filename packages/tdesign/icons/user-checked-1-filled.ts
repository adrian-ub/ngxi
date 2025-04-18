import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserChecked1FilledIcon],svg[tdesign-user-checked-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 7a5 5 0 1 1 10 0a5 5 0 0 1-10 0m20.096 1.44l-5.657 5.656l-3.535-3.535l1.414-1.415l2.121 2.122l4.243-4.243zM0 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2H0z"></svg:path>`,
})
export class TdesignUserChecked1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
