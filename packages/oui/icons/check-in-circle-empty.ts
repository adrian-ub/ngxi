import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiCheckInCircleEmptyIcon],svg[oui-check-in-circle-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.91 9.8l4.74-4.657a.5.5 0 1 1 .7.714l-5.09 5a.5.5 0 0 1-.701 0L3.649 8a.5.5 0 1 1 .701-.714z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14" clip-rule="evenodd"></svg:path>`,
})
export class OuiCheckInCircleEmptyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
