import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixConfigureIcon],svg[ix-configure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zM129.86 268.108l94.43-86.561l69.812 95.979l59.21-54.248l28.83 31.451l-94.43 86.562l-69.834-96l-59.187 54.27z"></svg:path>`,
})
export class IxConfigureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
