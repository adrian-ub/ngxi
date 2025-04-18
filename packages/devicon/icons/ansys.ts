import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconAnsysIcon],svg[devicon-ansys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffb71b" d="M46.883 8.313L0 119.679h32.013L77.153 8.313z"></svg:path><svg:path d="M82.593 11.824L67.42 49.262l28.545 70.425H128z"></svg:path>`,
})
export class DeviconAnsysIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
