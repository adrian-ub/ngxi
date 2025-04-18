import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPinThumbtackSolidIcon],svg[stash-pin-thumbtack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 4.5c0-.966.784-1.75 1.75-1.75h6c.967 0 1.75.784 1.75 1.75c0 1.063-.89 1.75-1.89 1.75l.562 4.128c1.835.52 2.951 2.165 3.314 3.975a.758.758 0 0 1-.736.897H6a.758.758 0 0 1-.735-.897c.362-1.81 1.478-3.454 3.313-3.975l.563-4.128c-1.002 0-1.89-.687-1.89-1.75m5.499 12a.75.75 0 0 0-1.5 0v4a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class StashPinThumbtackSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
