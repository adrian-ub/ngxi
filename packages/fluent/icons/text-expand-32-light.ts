import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextExpand32LightIcon],svg[fluent-text-expand-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5a.5.5 0 0 1 .5-.5h27a.5.5 0 0 1 0 1h-27a.5.5 0 0 1-.5-.5m0 22a.5.5 0 0 1 .5-.5h27a.5.5 0 0 1 0 1h-27a.5.5 0 0 1-.5-.5M18.5 11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm-.5 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m-9 4a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m1-12.25a.75.75 0 0 0-1.5 0V15H4.75a.75.75 0 0 0 0 1.5H8.5v3.75a.75.75 0 0 0 1.5 0V16.5h3.75a.75.75 0 0 0 0-1.5H10z"></svg:path>`,
})
export class FluentTextExpand32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
