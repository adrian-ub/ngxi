import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDensity20FilledIcon],svg[fluent-text-density-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5M9 5H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm7.5 0H12v-3h4.5a1.5 1.5 0 0 1 0 3m0-5H12V6h4.5a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentTextDensity20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
