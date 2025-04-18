import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpacebar20RegularIcon],svg[fluent-spacebar-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 10.5v-2a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentSpacebar20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
