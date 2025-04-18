import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionBearRight01Icon],svg[carbon-direction-bear-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v2h6.586l-6.536 6.536a6.95 6.95 0 0 0-2.05 4.95V28h2V17.485a4.97 4.97 0 0 1 1.464-3.535L20 7.414V14h2V4Z"></svg:path>`,
})
export class CarbonDirectionBearRight01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
