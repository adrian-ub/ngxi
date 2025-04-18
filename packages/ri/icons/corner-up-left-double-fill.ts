import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerUpLeftDoubleFillIcon],svg[ri-corner-up-left-double-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19v-9h-5.586V4.586L8 11l6.414 6.414V12H18v7zM10.164 6.05L8.75 4.636L2.386 11l6.364 6.364l1.414-1.414L5.214 11z"></svg:path>`,
})
export class RiCornerUpLeftDoubleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
