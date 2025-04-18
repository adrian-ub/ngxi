import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow20FilledIcon],svg[fluent-location-arrow-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.638 2.07c.808-.312 1.603.483 1.292 1.292l-5.384 13.997c-.348.906-1.653.834-1.9-.105l-1.572-5.973a.5.5 0 0 0-.356-.356L2.745 9.353c-.94-.247-1.01-1.552-.105-1.9z"></svg:path>`,
})
export class FluentLocationArrow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
