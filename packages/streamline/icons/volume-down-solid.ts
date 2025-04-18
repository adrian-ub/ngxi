import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVolumeDownSolidIcon],svg[streamline-volume-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3.005A1.454 1.454 0 0 0 6.716 1.78l-.003.002L2.842 4.5H1.5C.68 4.5 0 5.18 0 6v2c0 .82.68 1.5 1.5 1.5h1.339l3.78 2.716l.007.005c.97.672 2.348-.024 2.374-1.21zm1.813 3.245a.75.75 0 0 0 0 1.5h2.376a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVolumeDownSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
