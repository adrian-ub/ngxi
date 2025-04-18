import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFatarrowdownIcon],svg[whh-fatarrowdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023.996 640q0 41-39 70l-378 284q-39 29-94.5 29t-94.5-29l-378-284q-39-29-39-70h-1V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5z"></svg:path>`,
})
export class WhhFatarrowdownIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
