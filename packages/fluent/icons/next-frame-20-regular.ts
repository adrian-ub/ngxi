import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNextFrame20RegularIcon],svg[fluent-next-frame-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5m5.447.214A1.25 1.25 0 0 0 8 4.252v11.5a1.25 1.25 0 0 0 1.954 1.033l8.5-5.793a1.25 1.25 0 0 0-.008-2.07zM9 4.252c0-.2.223-.319.39-.207l8.499 5.707a.25.25 0 0 1 .001.414l-8.5 5.793a.25.25 0 0 1-.39-.207z"></svg:path>`,
})
export class FluentNextFrame20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
