import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsArrowLeftUpIcon],svg[mono-icons-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9.414V15a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9.414l8.293 8.293a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class MonoIconsArrowLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
