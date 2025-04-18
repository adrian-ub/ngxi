import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp20RegularIcon],svg[fluent-arrow-up-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.133 9.16a.5.5 0 1 0 .738.675l5.631-6.168v13.831a.5.5 0 1 0 1 0V3.67l5.628 6.165a.5.5 0 0 0 .739-.674l-6.314-6.916a.75.75 0 0 0-.632-.24a.75.75 0 0 0-.476.24z"></svg:path>`,
})
export class FluentArrowUp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
