import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epViewIcon],svg[ep-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160"></svg:path>`,
})
export class EpViewIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
