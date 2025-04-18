import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elIndentLeftIcon],svg[el-indent-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1200 100.232V276.38H0V100.306zM0 374.744l337.939 225.293L0 825.33zm1200 1.318v175.561H506.25V376.062zm0 273.706V825.33H506.25V649.768zM0 923.693l1200 .073v176.001H0z"></svg:path>`,
})
export class ElIndentLeftIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
