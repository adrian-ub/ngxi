import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosModulusIcon],svg[logos-modulus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M125.287 82.052L.08.58v255.561h46.312v-68.606l78.895-49.742l80.615-50.595v168.943h49.739V.581L125.287 82.051" fill="#C7C8C9"></svg:path><svg:path d="M.08 161.203l46.312-29.412L.08 108.636v52.567" fill="#E55425"></svg:path><svg:path d="M125.287 82.052l-78.895 49.739v55.744l78.895-49.742v-55.74" fill="#40403E"></svg:path>`,
})
export class LogosModulusIcon {
  readonly viewBox = input("0 0 256 257")
  readonly width = input("1em")
  readonly height = input("1em")
}
