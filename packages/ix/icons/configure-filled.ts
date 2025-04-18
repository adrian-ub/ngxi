import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixConfigureFilledIcon],svg[ix-configure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM224.29 181.547l-94.431 86.561l28.83 31.452l59.188-54.269l69.833 96l94.431-86.562l-28.83-31.451l-59.21 54.248z"></svg:path>`,
})
export class IxConfigureFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
