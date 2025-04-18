import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTvIcon],svg[icon-park-outline-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="28" x="5" y="14" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 14l14-8m-15 8L10 6m25 14v6"></svg:path><svg:rect width="4" height="4" x="33" y="32" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class IconParkOutlineTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
