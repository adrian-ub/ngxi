import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHanging20RegularIcon],svg[fluent-text-hanging-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1zm-4 10a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm.5-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5m2.146 2.146l1.5-1.5a.5.5 0 0 1 .708.708L16.207 12l1.147 1.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class FluentTextHanging20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
