import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteLaptopFileOutlineIcon],svg[flowbite-laptop-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.286 7V5.786A.78.78 0 0 0 18.508 5H6.063a.78.78 0 0 0-.777.786V16m0 0h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5m-4-3h4m7-6v3a1 1 0 0 1-1 1h-3m8-3v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5.397a1 1 0 0 1 .27-.683l2.433-2.603a1 1 0 0 1 .73-.317h3.567a1 1 0 0 1 1 1"></svg:path>`,
})
export class FlowbiteLaptopFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
