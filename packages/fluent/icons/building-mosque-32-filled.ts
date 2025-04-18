import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingMosque32FilledIcon],svg[fluent-building-mosque-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 6.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M28 7.5A1.25 1.25 0 1 0 28 5a1.25 1.25 0 0 0 0 2.5M15.591 5.087a1 1 0 0 1 .818 0l.003.002a10 10 0 0 1 .348.164a24.6 24.6 0 0 1 3.576 2.133c.978.709 1.997 1.58 2.78 2.578c.778.994 1.384 2.194 1.384 3.536a8.5 8.5 0 0 1-.752 3.5H27v-7a1 1 0 1 1 2 0v17a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2a3 3 0 1 0-6 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a1 1 0 0 1 2 0v7h3.252a8.5 8.5 0 0 1-.752-3.5c0-1.342.606-2.542 1.385-3.536c.782-.999 1.8-1.87 2.779-2.577a24.6 24.6 0 0 1 3.927-2.3"></svg:path>`,
})
export class FluentBuildingMosque32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
