import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier1x48FilledIcon],svg[fluent-multiplier-1x-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5a1.5 1.5 0 0 0-2.785-.774v.001l-.01.017a8 8 0 0 1-.277.416c-.203.29-.506.702-.901 1.168c-.798.943-1.926 2.062-3.299 2.886a1.5 1.5 0 1 0 1.544 2.572A15.4 15.4 0 0 0 17 19.672V32.5a1.5 1.5 0 0 0 3 0zm6.56 8.94a1.5 1.5 0 0 0-2.12 2.12L26.878 29l-2.44 2.44a1.5 1.5 0 0 0 2.122 2.12L29 31.122l2.44 2.44a1.5 1.5 0 0 0 2.12-2.122L31.122 29l2.44-2.44a1.5 1.5 0 0 0-2.122-2.12L29 26.878z"></svg:path>`,
})
export class FluentMultiplier1x48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
