import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phElevatorBoldIcon],svg[ph-elevator-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-44 100v76h-24v-76Zm-48 76H92v-76h24Zm88 0h-16v-88a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v88H52V52h152ZM100 76a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhElevatorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
