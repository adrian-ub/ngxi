import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCertificateIcon],svg[el-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M978.231 1066.743L718.077 939.444l-136.759 255.307l-117.461-264.739l-268.871 107.669l80.19-278.306L0 669.027l240.32-161.649l-152.722-246.09L375.6 291.933L416.791 5.249l200.925 208.6L833.547 20.713l19.832 288.948l289.481-9.217L972.32 534.54L1200 713.555l-281.114 69.706z"></svg:path>`,
})
export class ElCertificateIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
