import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleMultipleConcentric20FilledIcon],svg[fluent-circle-multiple-concentric-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 10a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-3.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M10 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></svg:path>`,
})
export class FluentCircleMultipleConcentric20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
