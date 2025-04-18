import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWindIcon],svg[icon-park-outline-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 17h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2m10 8h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m5-34h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m-3 0h16M12 25h30m-20 8h12"></svg:path>`,
})
export class IconParkOutlineWindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
