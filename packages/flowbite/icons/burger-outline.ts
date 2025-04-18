import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBurgerOutlineIcon],svg[flowbite-burger-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12l2.667-1l2.666 1L12 11l2.667 1l2.666-1L20 12m-1 5H5v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM5 9h14V8a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4zm13.5 5h-13a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 1 0 0-3"></svg:path>`,
})
export class FlowbiteBurgerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
