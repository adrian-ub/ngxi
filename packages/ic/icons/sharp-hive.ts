import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHiveIcon],svg[ic-sharp-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.79 8l1.8-3l-1.8-3h-3.58l-1.8 3l1.8 3zm-3.58 1l-1.8 3l1.8 3h3.58l1.8-3l-1.8-3zm6.24 2.51h3.59l1.79-3l-1.79-3h-3.59l-1.8 3zm3.59 1h-3.59l-1.8 3l1.8 3h3.59l1.79-3zm-12.49-1l1.8-3l-1.8-3H3.96l-1.79 3l1.79 3zm0 1H3.96l-1.79 3l1.79 3h3.59l1.8-3zM10.21 16l-1.8 3l1.8 3h3.58l1.8-3l-1.8-3z"></svg:path>`,
})
export class IcSharpHiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
