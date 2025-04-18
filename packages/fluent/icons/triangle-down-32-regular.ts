import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleDown32RegularIcon],svg[fluent-triangle-down-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.843 27.32l10.75-19.5c1.194-2.166-.373-4.819-2.846-4.819H5.255c-2.473 0-4.04 2.652-2.847 4.818L13.15 27.32c1.236 2.242 4.457 2.242 5.693 0m-3.94-.966L4.16 6.855a1.25 1.25 0 0 1 1.095-1.853h21.492a1.25 1.25 0 0 1 1.094 1.853l-10.75 19.499a1.25 1.25 0 0 1-2.189 0"></svg:path>`,
})
export class FluentTriangleDown32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
