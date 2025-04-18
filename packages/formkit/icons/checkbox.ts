import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitCheckboxIcon],svg[formkit-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="41" height="41" x="1.5" y="1.5" fill="none" stroke="currentColor" stroke-width="3" rx="2.5"></svg:rect><svg:path fill="currentColor" d="m17.758 26.254l13.198-13.211l2.36 2.358l-15.557 15.557l-7.071-7.071l2.358-2.358z"></svg:path>`,
})
export class FormkitCheckboxIcon {
  readonly viewBox = input("0 0 44 44")
  readonly width = input("1em")
  readonly height = input("1em")
}
