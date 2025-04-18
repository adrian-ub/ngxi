import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elTimeIcon],svg[el-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C446.454 0 292.879 58.549 175.728 175.705c-234.304 234.309-234.304 614.254 0 848.562c234.303 234.311 614.241 234.311 848.543 0c234.305-234.309 234.305-614.254 0-848.562C907.121 58.549 753.546 0 600 0m0 156.734c113.438 0 226.909 43.228 313.462 129.782c173.105 173.109 173.105 453.828 0 626.938c-173.104 173.108-453.817 173.108-626.924 0c-173.106-173.109-173.105-453.829 0-626.938C373.091 199.962 486.562 156.734 600 156.734M538.626 257.44v280.291h-155.34V691.17h308.775V257.44z"></svg:path>`,
})
export class ElTimeIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
