import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsSadOutlineIcon],svg[famicons-sad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="184" cy="232" r="24" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 0 1-7.87 10.17H168.15a8 8 0 0 1-7.82-10.17C172.32 317.53 210.53 288 256 288"></svg:path><svg:circle cx="328" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class FamiconsSadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
