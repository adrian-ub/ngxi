import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbitePenNibOutlineIcon],svg[flowbite-pen-nib-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.988 19.012l5.41-5.41m2.366-6.424l4.058 4.058l-2.03 5.41L5.3 20L4 18.701l3.355-9.494l5.41-2.029Zm4.626 4.625L12.197 6.61L14.807 4L20 9.194z"></svg:path>`,
})
export class FlowbitePenNibOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
