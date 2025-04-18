import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCaretUpIcon],svg[gravity-ui-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.823 9.295a.73.73 0 0 1-.552 1.205H4.729a.73.73 0 0 1-.552-1.205L7.2 5.786a1 1 0 0 1 .757-.347h.084a1 1 0 0 1 .757.347z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCaretUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
