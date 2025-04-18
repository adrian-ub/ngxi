import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownBoldIcon],svg[ph-escalator-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.51 88.49a12 12 0 0 1 17-17L188 75V48a12 12 0 0 1 24 0v27l3.51-3.52a12 12 0 0 1 17 17l-24 24a12 12 0 0 1-17 0ZM244 160v40a20 20 0 0 1-20 20h-56a12 12 0 0 1-8.82-3.86L66.75 116H32a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h56a12 12 0 0 1 8.82 3.86L189.25 140H224a20 20 0 0 1 20 20m-24 4h-36a12 12 0 0 1-8.82-3.86L82.75 60H36v32h36a12 12 0 0 1 8.82 3.86L173.25 196H220Z"></svg:path>`,
})
export class PhEscalatorDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
