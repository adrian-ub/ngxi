import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faArrowUpIcon],svg[fa-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1579 779q0 51-37 90l-75 75q-38 38-91 38q-54 0-90-38L992 651v704q0 52-37.5 84.5T864 1472H736q-53 0-90.5-32.5T608 1355V651L314 944q-36 38-90 38t-90-38l-75-75q-38-38-38-90q0-53 38-91L710 37q35-37 90-37q54 0 91 37l651 651q37 39 37 91"></svg:path>`,
})
export class FaArrowUpIcon {
  readonly viewBox = input("0 0 1600 1472")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
