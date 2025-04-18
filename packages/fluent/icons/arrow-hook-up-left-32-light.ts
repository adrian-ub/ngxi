import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookUpLeft32LightIcon],svg[fluent-arrow-hook-up-left-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.854 5.146a.5.5 0 0 1 0 .708L7.707 11H19a7 7 0 1 1 0 14H9.5a.5.5 0 0 1 0-1H19a6 6 0 0 0 0-12H7.707l5.147 5.146a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentArrowHookUpLeft32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
