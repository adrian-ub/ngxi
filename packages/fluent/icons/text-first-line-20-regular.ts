import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFirstLine20RegularIcon],svg[fluent-text-first-line-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.646 3.146a.5.5 0 0 1 .708.708L16.207 5l1.147 1.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708zM12.5 4a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1zm5 10a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm.5-4.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 .5-.5"></svg:path>`,
})
export class FluentTextFirstLine20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
