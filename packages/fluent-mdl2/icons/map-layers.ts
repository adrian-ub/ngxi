import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MapLayersIcon],svg[fluent-mdl2-map-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1664 832l384 192l-384 192l384 192l-1024 512L0 1408l384-192L0 1024l384-192L0 640l1024-512l1024 512zM286 640l738 369l738-369l-738-369zm1476 768l-241-120l-497 248l-497-248l-241 120l738 369zm-738-15l738-369l-241-120l-497 248l-497-248l-241 120z"></svg:path>`,
})
export class FluentMdl2MapLayersIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
