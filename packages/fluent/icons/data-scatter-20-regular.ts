import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataScatter20RegularIcon],svg[fluent-data-scatter-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5v13A1.5 1.5 0 0 0 4.5 17h13a.5.5 0 0 1 0 1h-13A2.5 2.5 0 0 1 2 15.5v-13a.5.5 0 0 1 .5-.5M5 7.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M7.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7-3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M13 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m-3 7a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class FluentDataScatter20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
