import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionBearRight02Icon],svg[carbon-direction-bear-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4v2h6.586l-6.536 6.536a6.95 6.95 0 0 0-2.05 4.95V28h2V17.485a4.97 4.97 0 0 1 1.464-3.535L24 7.414V14h2V4ZM6 7.414L7.414 6L13 11.586L11.586 13z"></svg:path>`,
})
export class CarbonDirectionBearRight02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
