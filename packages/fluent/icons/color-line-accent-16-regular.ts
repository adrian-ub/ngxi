import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLineAccent16RegularIcon],svg[fluent-color-line-accent-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.007 11.414a1.75 1.75 0 0 0 1.958.773l2.397-.655h.001A3.2 3.2 0 0 0 7.44 11h6.06a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2q0-.044.007-.086"></svg:path>`,
})
export class FluentColorLineAccent16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
