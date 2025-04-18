import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftSolidIcon],svg[mynaui-arrow-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.578 5.487a.75.75 0 0 1 1.06-.034v5.797H19.5a.75.75 0 0 1 0 1.5h-8.862v5.797a.75.75 0 0 1-1.06-.034l-5.625-6a.75.75 0 0 1 0-1.026z"></svg:path>`,
})
export class MynauiArrowLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
