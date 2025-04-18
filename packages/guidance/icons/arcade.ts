import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceArcadeIcon],svg[guidance-arcade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 15.5v-8m0 0a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Zm-9.5 11v.219a6 6 0 0 1-1.516 3.986L.5 23.25v.25h23v-.25l-.485-.545a6 6 0 0 1-1.515-3.986V18.5zm3 0v-3h13v3z"></svg:path>`,
})
export class GuidanceArcadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
