import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHourglass2LineIcon],svg[ri-hourglass-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v4.46L13.537 12L20 17.54V22H4v-4.46L10.463 12L4 6.46zm8 8.683l6-5.143V4H6v1.54zm0 2.634L6 18.46V20h12v-1.54z"></svg:path>`,
})
export class RiHourglass2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
