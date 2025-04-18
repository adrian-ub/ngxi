import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowDownLeft16Icon],svg[qlementine-icons-arrow-down-left-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 13a.5.5 0 0 0 0-1H4.71l8.15-8.15a.5.5 0 0 0-.707-.707l-8.15 8.15v-5.79a.5.5 0 0 0-1 0v7a.5.5 0 0 0 .5.5h7z"></svg:path>`,
})
export class QlementineIconsArrowDownLeft16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
