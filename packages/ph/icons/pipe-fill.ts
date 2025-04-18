import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPipeFillIcon],svg[ph-pipe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 104h-24V56h24a8 8 0 0 0 0-16h-26.17A16 16 0 0 0 192 32h-16a16 16 0 0 0-13.83 8H144A104.11 104.11 0 0 0 40 144v18.16A16 16 0 0 0 32 176v16a16 16 0 0 0 8 13.84V232a8 8 0 0 0 16 0v-24h48v24a8 8 0 0 0 16 0v-26.16a16 16 0 0 0 8-13.84v-16a16 16 0 0 0-8-13.84V144a24 24 0 0 1 24-24h18.17a16 16 0 0 0 13.83 8h16a16 16 0 0 0 13.83-8H232a8 8 0 0 0 0-16m-120 88H48v-16h64Zm64-80V48h16v64Z"></svg:path>`,
})
export class PhPipeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
