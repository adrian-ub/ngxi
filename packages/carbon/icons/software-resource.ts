import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSoftwareResourceIcon],svg[carbon-software-resource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.391 14.527L17.473 2.609A2.08 2.08 0 0 0 16 2c-.533 0-1.067.203-1.473.609L2.609 14.527C2.203 14.933 2 15.466 2 16s.203 1.067.609 1.473L14.526 29.39c.407.407.941.61 1.474.61s1.067-.203 1.473-.609L29.39 17.474c.407-.407.61-.94.61-1.474s-.203-1.067-.609-1.473M16 28.036L3.965 16L16 3.964L28.036 16z"></svg:path>`,
})
export class CarbonSoftwareResourceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
