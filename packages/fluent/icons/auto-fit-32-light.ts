import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutoFit32LightIcon],svg[fluent-auto-fit-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 0 1h-19a.5.5 0 0 1-.5-.5m0 23a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 0 1h-19a.5.5 0 0 1-.5-.5M16.854 7.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L16 8.707v14.586l-3.646-3.647a.5.5 0 0 0-.708.708l4.5 4.5a.5.5 0 0 0 .708 0l4.5-4.5a.5.5 0 0 0-.708-.708L17 23.293V8.707l3.146 3.147a.5.5 0 0 0 .708-.708z"></svg:path>`,
})
export class FluentAutoFit32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
