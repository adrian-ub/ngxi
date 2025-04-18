import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFileEditAltIcon],svg[el-file-edit-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M456.885 220.898h394.482v172.046l24.683-24.609l122.388 122.314l-289.014 289.087l-181.201 58.887l58.813-181.274l198.047-198.047V286.816H505.225v118.726H380.42v507.642h404.663V803.76l66.284-66.357v241.699H314.062V358.813zm160.766 466.993l-29.443 90.674l90.601-29.443z"></svg:path>`,
})
export class ElFileEditAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
