import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableRowsIcon],svg[ix-table-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 192h106.667v42.667H42.667zm0-85.333h106.667v42.667H42.667zm0 170.667h106.667V320H42.667zm0 85.333h106.667v42.667H42.667zM192 192h277.334v42.667H192zm0-85.333h277.334v42.667H192zm0 170.667h277.334V320H192zm0 85.333h277.334v42.667H192z"></svg:path>`,
})
export class IxTableRowsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
