import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowUp16Icon],svg[qlementine-icons-arrow-up-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.85 2.15a.5.5 0 0 0-.707 0l-5 5a.5.5 0 0 0 .707.707L7 3.707v9.79a.5.5 0 0 0 1 0v-9.79l4.15 4.15a.5.5 0 0 0 .707-.707l-5-5z"></svg:path>`,
})
export class QlementineIconsArrowUp16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
