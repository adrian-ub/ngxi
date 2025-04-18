import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderLeftRight20FilledIcon],svg[fluent-border-left-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6.002a1.5 1.5 0 0 0-.95-1.396a.75.75 0 1 1 .493-1.413v-.005A3 3 0 0 1 17 6.002v8c0 1.29-.814 2.39-1.957 2.814v-.004a.75.75 0 0 1-.586-1.38l.01-.004l.067-.024a1.5 1.5 0 0 0 .966-1.402zm-6.749-3a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm0 12.5a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM5.449 4.606A1.5 1.5 0 0 0 4.5 6.002v8a1.5 1.5 0 0 0 1.033 1.426l.01.003a.75.75 0 0 1-.586 1.381v.004A3 3 0 0 1 3 14.002v-8c0-1.29.814-2.39 1.957-2.814v.005a.75.75 0 1 1 .492 1.413"></svg:path>`,
})
export class FluentBorderLeftRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
