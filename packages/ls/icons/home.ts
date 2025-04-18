import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsHomeIcon],svg[ls-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m623.352 238l116 106c14 13 10 23-9 23h-87v277c0 19-16 36-35 36h-151V486c0-19-17-36-36-36h-95c-19 0-36 17-36 36v194h-151c-19 0-36-17-36-36V367h-86c-19 0-23-10-9-23l339-308c14-13 38-13 53 0l77 69V50c0-19 17-36 36-36h75c19 0 35 17 35 36z"></svg:path>`,
})
export class LsHomeIcon {
  readonly viewBox = input("0 0 748 680")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
