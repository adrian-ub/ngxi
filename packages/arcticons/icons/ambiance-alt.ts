import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmbianceAltIcon],svg[arcticons-ambiance-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.245 17.631V30.52m5.585 4.891V12.66m5.585 2.66v17.547M24 37.743V10.156M29.585 5.5v37m5.585-7.202V12.9m5.585 7.152v8.09"></svg:path>`,
})
export class ArcticonsAmbianceAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
