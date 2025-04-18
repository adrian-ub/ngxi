import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAssetTaskSolidIcon],svg[bubbles-asset-task-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.087 0h-9.43A1.286 1.286 0 0 0 .373 1.286v9.428A1.286 1.286 0 0 0 1.658 12h5.786a.4.4 0 0 0 .3-.129l4.5-4.5a.4.4 0 0 0 .128-.3V1.286A1.286 1.286 0 0 0 11.086 0m-.798 7.011L7.384 9.917a.22.22 0 0 1-.24.052a.21.21 0 0 1-.129-.198v-2.7a.43.43 0 0 1 .429-.428h2.7a.21.21 0 0 1 .197.128a.22.22 0 0 1-.052.24"></svg:path>`,
})
export class BubblesAssetTaskSolidIcon {
  readonly viewBox = input("0 0 13 12")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
