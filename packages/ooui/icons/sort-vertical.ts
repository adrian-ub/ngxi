import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSortVerticalIcon],svg[ooui-sort-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0L3 8h14zm0 18l-7-8h14z"></svg:path>`,
})
export class OouiSortVerticalIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
