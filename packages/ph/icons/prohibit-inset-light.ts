import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProhibitInsetLightIcon],svg[ph-prohibit-inset-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.24 155.76a6 6 0 1 1-8.48 8.48l-64-64a6 6 0 0 1 8.48-8.48ZM230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhProhibitInsetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
