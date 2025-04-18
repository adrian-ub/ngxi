import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextCollapse32LightIcon],svg[fluent-text-collapse-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5a.5.5 0 0 1 .5-.5h27a.5.5 0 0 1 0 1h-27a.5.5 0 0 1-.5-.5m0 22a.5.5 0 0 1 .5-.5h27a.5.5 0 0 1 0 1h-27a.5.5 0 0 1-.5-.5M18.5 11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm-.5 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5M16.5 16a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0M4 15.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentTextCollapse32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
