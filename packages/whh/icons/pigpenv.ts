import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenvIcon],svg[whh-pigpenv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M977 1008.5q-34 22.5-72.5 11T846 969L513 323L180 969q-20 39-58.5 50.5t-72.5-11T4.5 943t9.5-81L430 54l1-1.5l1-1.5q13-23 33-36q34-22 72.5-10.5T596 54l416 808q20 38 9.5 81t-44.5 65.5"></svg:path>`,
})
export class WhhPigpenvIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
