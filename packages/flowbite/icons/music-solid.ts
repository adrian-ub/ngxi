import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMusicSolidIcon],svg[flowbite-music-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.622 3.217A1 1 0 0 1 19 4v11.667q0 .06-.007.121q.007.105.007.212a3 3 0 1 1-2-2.83V9.26l-8 1.867v6.876a3 3 0 1 1-2-2.832V6.333a1 1 0 0 1 .773-.974l10-2.333a1 1 0 0 1 .842.186z"></svg:path>`,
})
export class FlowbiteMusicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
