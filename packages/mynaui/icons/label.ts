import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLabelIcon],svg[mynaui-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.98 20.194l-7.298-7.298c-.37-.37-.58-.87-.587-1.392L3 4.015A1 1 0 0 1 4.015 3l7.489.095a2 2 0 0 1 1.392.587l7.298 7.298c.674.673 1.192 1.959.424 2.727l-6.91 6.91c-.769.769-2.055.25-2.728-.423M8.019 7.552l-.707-.707"></svg:path>`,
})
export class MynauiLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
