import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier1x48RegularIcon],svg[fluent-multiplier-1x-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 15.25a1.25 1.25 0 0 0-2.322-.643l-.002.004l-.015.025l-.067.106a18 18 0 0 1-1.275 1.742c-.874 1.054-1.976 2.124-3.086 2.628a1.25 1.25 0 0 0 1.034 2.276c1.25-.568 2.36-1.535 3.233-2.465V32.75a1.25 1.25 0 0 0 2.5 0zm6.634 9.116a1.25 1.25 0 1 0-1.768 1.768L27.232 29l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768L29 30.768l2.866 2.866a1.25 1.25 0 0 0 1.768-1.768L30.768 29l2.866-2.866a1.25 1.25 0 0 0-1.768-1.768L29 27.232z"></svg:path>`,
})
export class FluentMultiplier1x48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
