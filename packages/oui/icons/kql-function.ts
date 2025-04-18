import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiKqlFunctionIcon],svg[oui-kql-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7H3v2h4v2l3-3l-3-3zM6 6V5a1 1 0 0 1 1.707-.707l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 6 11v-1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm7.5-3a.5.5 0 0 1 .5.5v9a.5.5 0 1 1-1 0v-9a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class OuiKqlFunctionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
