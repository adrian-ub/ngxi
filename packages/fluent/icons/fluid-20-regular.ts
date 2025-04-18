import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFluid20RegularIcon],svg[fluent-fluid-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h5.5A1.5 1.5 0 0 1 15 5.5V9h-1V5.5a.5.5 0 0 0-.5-.5H8zM5 8v5.5a.5.5 0 0 0 .5.5H9v1H5.5A1.5 1.5 0 0 1 4 13.5V8zM2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2.043a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5zM3.5 3a.5.5 0 0 0-.5.5v2.043a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5zm6.504 8.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class FluentFluid20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
