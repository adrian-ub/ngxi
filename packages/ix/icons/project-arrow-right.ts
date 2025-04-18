import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixProjectArrowRightIcon],svg[ix-project-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m378.699 283.633l100.419 100.418l-100.419 100.418l-30.17-30.169l48.877-48.915H278.281v-42.667h119.168l-48.92-48.915zM234.667 42.666l192 106.667v156.629L384 261.226v-70.827l-128 73.899v193.173l-21.333 11.862l-192-106.667V149.333zM85.333 191.594V334.6l128 73.613v-142.72zM234.667 89.947l-120.256 69.156l119.232 68.843l120.234-69.419z"></svg:path>`,
})
export class IxProjectArrowRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
