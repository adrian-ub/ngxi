import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerUpRightIcon],svg[mynaui-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 10.027H9a4 4 0 0 0-4 4V19m14-8.973l-4.78 5.028M19 10.027L14.22 5"></svg:path>`,
})
export class MynauiCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
