import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpace3d16FilledIcon],svg[fluent-space-3d-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V10h-.732l-1.334-2H13V4.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5V8h1.066l-1.334 2H2zm0 7V11h3.306l-.997 2.993A2.5 2.5 0 0 1 2 11.5m4.36-.5h3.28l1 3H5.36zm.334-1h2.612L8.64 8H7.36zm4 1H14v.5a2.5 2.5 0 0 1-2.309 2.493zm-.334-1h1.706l-1.334-2H9.694zm-6.426 0H5.64l.666-2H5.268z"></svg:path>`,
})
export class FluentSpace3d16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
