import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLandscapeLineIcon],svg[ri-landscape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.27 12.216L15 6l8 15H2L9 8zm1.12 2.022L14.987 19h4.68l-4.77-8.942zM5.348 19h7.304L9 12.219zM5.5 8a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class RiLandscapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
