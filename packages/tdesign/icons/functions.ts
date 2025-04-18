import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFunctionsIcon],svg[tdesign-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16v2H7.14l8.275 7l-8.275 7H20v2H4v-1.964L12.318 12L4 4.964z"></svg:path>`,
})
export class TdesignFunctionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
