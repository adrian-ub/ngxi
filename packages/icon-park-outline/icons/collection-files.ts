import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCollectionFilesIcon],svg[icon-park-outline-collection-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 44V4h23l9 10.5V44z"></svg:path><svg:path d="m24 15l3.084 6.755l7.378.846l-5.472 5.02l1.476 7.278L24 31.247l-6.466 3.652l1.476-7.278l-5.472-5.02l7.378-.846z"></svg:path></svg:g>`,
})
export class IconParkOutlineCollectionFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
