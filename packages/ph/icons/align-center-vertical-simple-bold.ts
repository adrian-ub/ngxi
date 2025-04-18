import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleBoldIcon],svg[ph-align-center-vertical-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 116h-28V48a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20v68H48a12 12 0 0 0 0 24h28v68a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-68h28a12 12 0 0 0 0-24m-52 88h-56V52h56Z"></svg:path>`,
})
export class PhAlignCenterVerticalSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
