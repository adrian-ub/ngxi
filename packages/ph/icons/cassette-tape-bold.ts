import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeBoldIcon],svg[ph-cassette-tape-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144h-37l-12.6-16.8a8 8 0 0 0-6.4-3.2H92a8 8 0 0 0-6.4 3.2L73 188H36V68h184ZM82 152h92a34 34 0 0 0 0-68H82a34 34 0 0 0 0 68m0-44a10 10 0 1 1-10 10a10 10 0 0 1 10-10m102 10a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-42.5 10h-27a34.1 34.1 0 0 0 0-20h27a34.1 34.1 0 0 0 0 20"></svg:path>`,
})
export class PhCassetteTapeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
