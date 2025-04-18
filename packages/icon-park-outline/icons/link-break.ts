import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLinkBreakIcon],svg[icon-park-outline-link-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 15h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H32M17 15H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11m7-27v36M12 24h4m16 0h4"></svg:path>`,
})
export class IconParkOutlineLinkBreakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
