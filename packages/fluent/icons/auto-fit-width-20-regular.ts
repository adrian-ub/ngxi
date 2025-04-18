import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutoFitWidth20RegularIcon],svg[fluent-auto-fit-width-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zM3 4a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zm11.854 5.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L13.293 10H6.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L6.707 9h6.586l-1.147-1.146a.5.5 0 0 1 .708-.708z"></svg:path>`,
})
export class FluentAutoFitWidth20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
