import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmark28FilledIcon],svg[fluent-checkmark-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 19.586l-6.293-6.293a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l14-14a1 1 0 0 0-1.414-1.414z"></svg:path>`,
})
export class FluentCheckmark28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
