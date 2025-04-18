import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFourArrowsIcon],svg[icon-park-twotone-four-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFourArrows0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 24l-5-5m5-11v16zm0 16l5-5zm0 0l-5 5m5 11V24zm0-16l5 5z"></svg:path><svg:path fill="#555" d="M20 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M8 24h32"></svg:path><svg:path fill="#555" d="M40 24a4 4 0 1 0 0-8a4 4 0 0 0 0 8M28 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFourArrows0)"></svg:path>`,
})
export class IconParkTwotoneFourArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
