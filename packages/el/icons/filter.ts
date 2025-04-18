import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFilterIcon],svg[el-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l415.869 415.869V1200l368.262-301.318V415.869L1200 0z"></svg:path>`,
})
export class ElFilterIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
