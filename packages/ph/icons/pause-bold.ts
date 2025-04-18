import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPauseBoldIcon],svg[ph-pause-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28h-40a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-32V52h32ZM96 28H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H60V52h32Z"></svg:path>`,
})
export class PhPauseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
