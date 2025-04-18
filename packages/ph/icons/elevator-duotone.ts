import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phElevatorDuotoneIcon],svg[ph-elevator-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 104v112H72V104Z" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 80v96h-40v-96Zm-56 96H80v-96h40Zm88 0h-16V104a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v104H48V48h160zM152 72a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhElevatorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
