import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSortDesc16Icon],svg[qlementine-icons-sort-desc-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1.5a.5.5 0 0 0-1 0v11.8L.85 12.15a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .707 0l2-2a.5.5 0 0 0-.707-.707l-1.15 1.15V1.5zM7.5 12a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0-3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0-3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm8-2a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1z"></svg:path>`,
})
export class QlementineIconsSortDesc16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
