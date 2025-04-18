import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleMultipleConcentric20RegularIcon],svg[fluent-circle-multiple-concentric-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0m7-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></svg:path>`,
})
export class FluentCircleMultipleConcentric20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
