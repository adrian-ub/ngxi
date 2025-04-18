import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightBoldIcon],svg[ph-magnet-straight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36h-40a20 20 0 0 0-20 20v88a12 12 0 0 1-24 0V56a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v88a92 92 0 0 0 92 92h.71c50.34-.38 91.3-42.1 91.3-93V56A20 20 0 0 0 200 36m-4 24v24h-32V60ZM92 60v24H60V60Zm36.52 152H128a68 68 0 0 1-68-68v-36h32v36a36 36 0 0 0 72 0v-36h32v35c0 37.77-30.27 68.72-67.48 69"></svg:path>`,
})
export class PhMagnetStraightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
