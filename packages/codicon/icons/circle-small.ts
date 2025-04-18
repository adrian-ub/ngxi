import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCircleSmallIcon],svg[codicon-circle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.832 8.556a1 1 0 1 1-1.663-1.112a1 1 0 0 1 1.663 1.112m.831.555A2 2 0 1 0 6.338 6.89a2 2 0 0 0 3.325 2.22"></svg:path>`,
})
export class CodiconCircleSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
