import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsTachometerIcon],svg[bxs-tachometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C6.486 4 2 8.486 2 14a9.9 9.9 0 0 0 1.051 4.445c.17.34.516.555.895.555h16.107c.379 0 .726-.215.896-.555A9.9 9.9 0 0 0 22 14c0-5.514-4.486-10-10-10m5.022 5.022L13.06 15.06a1.53 1.53 0 0 1-2.121.44a1.53 1.53 0 0 1 0-2.561l6.038-3.962a.033.033 0 0 1 .045.01a.03.03 0 0 1 0 .035"></svg:path>`,
})
export class BxsTachometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
