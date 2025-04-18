import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutoFitHeight20RegularIcon],svg[fluent-auto-fit-height-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 15a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM9.146 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L10 6.707v6.586l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9 13.293V6.707L7.854 7.854a.5.5 0 1 1-.708-.708z"></svg:path>`,
})
export class FluentAutoFitHeight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
