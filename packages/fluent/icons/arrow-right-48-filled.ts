import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRight48FilledIcon],svg[fluent-arrow-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 24a1.5 1.5 0 0 1 1.5-1.5h31.835L24.698 10.32a1.5 1.5 0 1 1 2.104-2.14l14.997 14.748l.009.009l.011.011a1.5 1.5 0 0 1-.042 2.145L26.802 39.82a1.5 1.5 0 1 1-2.104-2.139L37.085 25.5H5.25a1.5 1.5 0 0 1-1.5-1.5"></svg:path>`,
})
export class FluentArrowRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
