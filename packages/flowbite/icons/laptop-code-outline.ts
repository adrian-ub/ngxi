import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteLaptopCodeOutlineIcon],svg[flowbite-laptop-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.357 16V5.786c0-.434.348-.786.778-.786h12.444c.43 0 .778.352.778.786V16m-14 0h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1m-14 0h14m-10-8l2.625 2.5L9.357 13m4 0h2"></svg:path>`,
})
export class FlowbiteLaptopCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
