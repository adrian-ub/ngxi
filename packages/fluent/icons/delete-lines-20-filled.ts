import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeleteLines20FilledIcon],svg[fluent-delete-lines-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a1.5 1.5 0 0 0-3 0zm-4 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-.808 7H11.5a1.5 1.5 0 0 0-1.118 2.5a1.5 1.5 0 0 0-.382 1c0 .384.144.735.382 1a1.5 1.5 0 0 0-.297 1.5H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zm4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentDeleteLines20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
