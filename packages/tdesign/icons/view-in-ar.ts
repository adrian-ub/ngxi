import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignViewInArIcon],svg[tdesign-view-in-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 1.5h5v2h-3v3h-2zm16 0h5v5h-2v-3h-3zM12 3.845l7.061 4.077v8.155L12 20.155l-7.062-4.078V7.922zm-5.062 6.386v4.692L11 17.268v-4.691zM13 17.268l4.062-2.345v-4.691L13 12.577zm-1-6.423L16.061 8.5L12 6.155L7.938 8.499zM3.5 17.5v3h3v2h-5v-5zm19 0v5h-5v-2h3v-3z"></svg:path>`,
})
export class TdesignViewInArIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
