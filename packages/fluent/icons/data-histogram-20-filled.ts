import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataHistogram20FilledIcon],svg[fluent-data-histogram-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5A1.5 1.5 0 0 0 10.5 3h-1A1.5 1.5 0 0 0 8 4.5V17h4zM13 6v11h3.5a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2zM5 9h2v8H3.5a.5.5 0 0 1-.5-.5V11a2 2 0 0 1 2-2"></svg:path>`,
})
export class FluentDataHistogram20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
