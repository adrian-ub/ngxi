import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUndo32LightIcon],svg[fluent-arrow-undo-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1H6.707l9.07-9.07a6.571 6.571 0 0 1 9.294 9.292L12.145 28.147a.5.5 0 0 0 .708.707L25.778 15.93A7.571 7.571 0 0 0 15.07 5.222L6 14.292z"></svg:path>`,
})
export class FluentArrowUndo32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
