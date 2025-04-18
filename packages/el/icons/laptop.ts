import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elLaptopIcon],svg[el-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.264 172.705v628.052h959.473V172.705zm119.018 114.478h721.436v399.17H239.282zM0 857.886v106.201l60.938 63.208h1078.125L1200 964.087V857.886zm488.745 34.79h222.51v96.167h-222.51z"></svg:path>`,
})
export class ElLaptopIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
