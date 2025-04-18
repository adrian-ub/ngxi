import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTowerClockFilledIcon],svg[tdesign-tower-clock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 11a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path fill="currentColor" d="M17.288 2.914L12 .932L6.713 2.914l.702 1.873l.585-.22V5H5v12h2v6h10v-6h2V5h-3v-.432l.585.22zM11 20v-3h2v3zm1-12.25a3.25 3.25 0 1 1 0 6.5a3.25 3.25 0 0 1 0-6.5"></svg:path>`,
})
export class TdesignTowerClockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
