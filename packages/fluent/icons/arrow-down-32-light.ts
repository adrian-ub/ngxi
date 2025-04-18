import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDown32LightIcon],svg[fluent-arrow-down-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3.5a.5.5 0 0 0-1 0v23.833l-9.655-9.195a.5.5 0 0 0-.69.724l10.5 10a.5.5 0 0 0 .69 0l10.5-10a.5.5 0 0 0-.69-.724L16.5 27.333z"></svg:path>`,
})
export class FluentArrowDown32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
