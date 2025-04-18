import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownSolidIcon],svg[mynaui-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.487 14.422a.75.75 0 0 1-.034-1.06h5.797V4.5a.75.75 0 0 1 1.5 0v8.862h5.797a.75.75 0 0 1-.034 1.06l-6 5.625a.75.75 0 0 1-1.026 0z"></svg:path>`,
})
export class MynauiArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
