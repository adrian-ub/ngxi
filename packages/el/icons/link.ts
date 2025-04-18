import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elLinkIcon],svg[el-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m320.883 1200l400.642-400.664L600.234 678.07l77.836-77.836l121.266 121.289L1200 320.883L879.117 0l-400.64 400.664L599.766 521.93l-77.836 77.836l-121.266-121.289L0 879.117zm0-156.619L156.628 879.127l244.031-244.031l42.973 42.974l-78.556 78.555l78.31 78.31l78.557-78.556l42.973 42.974zm478.476-478.477l-42.974-42.974l78.557-78.555l-78.311-78.31l-78.556 78.556l-42.984-42.984l244.031-244.055l164.273 164.264l-244.052 244.033z"></svg:path>`,
})
export class ElLinkIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
