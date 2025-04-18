import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwInformationIcon],svg[uiw-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m-.145 7.21a.7.7 0 0 0-.698.697v7.558a.698.698 0 0 0 1.395 0V7.907a.7.7 0 0 0-.697-.698m.028-2.791a.93.93 0 1 0 0 1.86a.93.93 0 0 0 0-1.86"></svg:path>`,
})
export class UiwInformationIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
