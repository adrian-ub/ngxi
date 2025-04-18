import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWrench16FilledIcon],svg[fluent-wrench-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1a4 4 0 0 0-3.896 4.91l-5.051 5.235a1.986 1.986 0 0 0 2.842 2.774l5.007-5.072a4.002 4.002 0 0 0 5.062-4.382a.5.5 0 0 0-.85-.287L12 6.293L9.707 4l2.115-2.115a.5.5 0 0 0-.287-.85A4 4 0 0 0 10.999 1"></svg:path>`,
})
export class FluentWrench16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
