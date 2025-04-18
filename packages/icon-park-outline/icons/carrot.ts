import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCarrotIcon],svg[icon-park-outline-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M15.624 20.682C14.29 15.248 18.404 10 24 10s9.71 5.248 8.376 10.682L27.279 41.43a3.376 3.376 0 0 1-6.557 0z"></svg:path><svg:path stroke-linecap="round" d="M24 4v5.5m6.102-3.908l-2.728 3.25M18 5.592l2.727 3.25M16 19h6m3 7h6m-12 8h4"></svg:path></svg:g>`,
})
export class IconParkOutlineCarrotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
