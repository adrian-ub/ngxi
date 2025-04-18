import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFourArrowsIcon],svg[icon-park-outline-four-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 24l-5-5m5-11v16zm0 16l5-5zm0 0l-5 5m5 11V24zm0-16l5 5zm-4-12a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-8h32m0 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M28 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class IconParkOutlineFourArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
