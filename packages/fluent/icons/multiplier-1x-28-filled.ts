import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier1x28FilledIcon],svg[fluent-multiplier-1x-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a1 1 0 0 0-1.857-.516l-.006.01q-.008.015-.03.047a10 10 0 0 1-.667.89c-.474.562-1.143 1.225-1.954 1.711a1 1 0 0 0 1.029 1.716A9 9 0 0 0 10 11.735V19a1 1 0 1 0 2 0zm3.707 5.293a1 1 0 0 0-1.414 1.414L15.586 17l-1.293 1.293a1 1 0 0 0 1.414 1.414L17 18.414l1.293 1.293a1 1 0 0 0 1.414-1.414L18.414 17l1.293-1.293a1 1 0 0 0-1.414-1.414L17 15.586z"></svg:path>`,
})
export class FluentMultiplier1x28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
