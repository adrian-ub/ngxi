import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFilterOffSolidIcon],svg[clarity-filter-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.9 18.6L10.3 5.1h22.2c.8-.1 1.5.5 1.5 1.3v1.2c0 .5-.2 1-.6 1.4z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M33.5 31L4.1 1.6L2.6 3l2.1 2.1H3.5C2.7 5 2 5.6 2 6.4v1.2c0 .5.2 1 .6 1.4L14 20.5v10.1l8 3.4V22.4l10.1 10.1z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFilterOffSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
