import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailVolumeFillIcon],svg[ri-mail-volume-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14.5v9L16.667 21H14v-4h2.667zM21 3a1 1 0 0 1 1 1v10.529A6 6 0 0 0 12.34 21H3.002a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 14a2 2 0 0 1 .15 3.994L21 21zM5.647 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513l-6.286 5.438z"></svg:path>`,
})
export class RiMailVolumeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
