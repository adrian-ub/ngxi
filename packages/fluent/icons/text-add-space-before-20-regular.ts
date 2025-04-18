import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextAddSpaceBefore20RegularIcon],svg[fluent-text-add-space-before-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.146 5.854a.5.5 0 1 1 .708-.708L10 6.293l1.146-1.147a.5.5 0 0 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0zM3 10.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentTextAddSpaceBefore20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
