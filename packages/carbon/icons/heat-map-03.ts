import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHeatMap03Icon],svg[carbon-heat-map-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 6h-6V5h6Zm0 2v4h-6v-4Zm-8 0v4H5v-4Zm0 6v4H5v-4Zm2 0h6v4h-6Zm8-2v-4h6v4ZM5 23h6v4H5Zm16 4v-4h6v4Z"></svg:path>`,
})
export class CarbonHeatMap03Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
