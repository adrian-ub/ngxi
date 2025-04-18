import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderAll24FilledIcon],svg[fluent-border-all-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm10 13h5a1 1 0 0 0 1-1v-5h-6zm-2-6H5v5a1 1 0 0 0 1 1h5zm2-2h6V6a1 1 0 0 0-1-1h-5zm-2-6H6a1 1 0 0 0-1 1v5h6z"></svg:path>`,
})
export class FluentBorderAll24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
