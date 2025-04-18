import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow16FilledIcon],svg[fluent-location-arrow-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.638 2.07c.808-.312 1.603.483 1.292 1.292l-3.846 9.998c-.348.906-1.653.834-1.9-.105l-1.06-4.024a.5.5 0 0 0-.356-.357L2.744 7.815c-.94-.247-1.01-1.552-.105-1.9z"></svg:path>`,
})
export class FluentLocationArrow16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
