import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForward32LightIcon],svg[fluent-arrow-forward-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.146 6.854a.5.5 0 0 1 .708-.708l7 7a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708L27.293 14H15.5C9.149 14 4 19.149 4 25.5a.5.5 0 0 1-1 0C3 18.596 8.596 13 15.5 13h11.793z"></svg:path>`,
})
export class FluentArrowForward32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
