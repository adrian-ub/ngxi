import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquarebookmarkIcon],svg[whh-squarebookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-752q0-33-23-56.5t-55-23.5h-228q-32 0-55 23.5t-23 56.5v520q0 15 11 27.5t21 12.5l160-128l160 128q10 0 21-12.5t11-27.5z"></svg:path>`,
})
export class WhhSquarebookmarkIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
