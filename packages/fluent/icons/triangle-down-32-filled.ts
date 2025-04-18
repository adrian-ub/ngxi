import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleDown32FilledIcon],svg[fluent-triangle-down-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.15 27.319c1.236 2.242 4.457 2.242 5.693 0l10.75-19.498c1.194-2.166-.373-4.819-2.846-4.819H5.255c-2.473 0-4.04 2.652-2.847 4.818z"></svg:path>`,
})
export class FluentTriangleDown32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
