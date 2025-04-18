import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHoldIcon],svg[icon-park-outline-hold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m20 24l6 2s15-3 17-3s2 2 0 4s-9 8-15 8s-10-3-14-3H4"></svg:path><svg:path d="M4 20c2-2 6-5 10-5s13.5 4 15 6s-3 5-3 5"></svg:path></svg:g>`,
})
export class IconParkOutlineHoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
