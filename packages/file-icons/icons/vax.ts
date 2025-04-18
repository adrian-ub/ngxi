import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsVaxIcon],svg[file-icons-vax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 134.702h51.287l90.31 154.728l90.312-152.465h51.287L141.598 377.298zm218.147 234.382l23.235-40.05h102.495l-25.315 42.313h51.472L416.32 294.8l45.787 77.68H512l-70.286-120.757l67.444-111.284h-52.103l-40.419 64.997l-38.84-67.26h-50.84l63.471 111.152l-10.736 19.262l-74.523-130.73l-137.545 231.225zm51.385-83.72l34.573-59.333l33.638 59.333z"></svg:path>`,
})
export class FileIconsVaxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
