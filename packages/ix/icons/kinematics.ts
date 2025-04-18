import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixKinematicsIcon],svg[ix-kinematics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 64v341.333H448V448H64V64zM192 256c35.346 0 64 28.654 64 64s-28.654 64-64 64s-64-28.654-64-64s28.654-64 64-64m0 42.667c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333M448 64v149.333h-42.667l-.014-76.608l-135.312 135.338l-30.17-30.17l135.21-135.226h-76.38V64z" clip-rule="evenodd"></svg:path>`,
})
export class IxKinematicsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
