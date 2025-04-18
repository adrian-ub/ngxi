import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiIndexMappingIcon],svg[oui-index-mapping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H4.915a1.5 1.5 0 1 1 0-1H8V2.5A1.5 1.5 0 0 1 9.5 1h2.585a1.5 1.5 0 1 1 0 1H9.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h2.585a1.5 1.5 0 1 1 0 1H9.5A1.5 1.5 0 0 1 8 12.5zM3.5 3a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 12a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m10-6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class OuiIndexMappingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
