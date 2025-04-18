import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerUpRightDoubleFillIcon],svg[ri-corner-up-right-double-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-9h5.586V4.586L16 11l-6.414 6.414V12H6v7zm9.836-12.95l1.415-1.414L21.615 11l-6.364 6.364l-1.415-1.414l4.95-4.95z"></svg:path>`,
})
export class RiCornerUpRightDoubleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
