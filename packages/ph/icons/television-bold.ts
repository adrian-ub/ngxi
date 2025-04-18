import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTelevisionBoldIcon],svg[ph-television-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-59l27.52-27.52a12 12 0 0 0-17-17L128 55L88.49 15.51a12 12 0 0 0-17 17L99 60H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20M44 84h84v112H44Zm168 112h-60V84h60Zm-44-80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhTelevisionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
