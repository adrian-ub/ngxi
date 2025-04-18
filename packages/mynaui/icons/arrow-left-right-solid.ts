import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftRightSolidIcon],svg[mynaui-arrow-left-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 7.5c0 .414.336.75.75.75h6.97v3.28a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0v3.28H6.5a.75.75 0 0 0-.75.75m12.5 9a.75.75 0 0 1-.75.75h-6.97v3.28a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0v3.28h6.97a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class MynauiArrowLeftRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
