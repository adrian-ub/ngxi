import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSanIcon],svg[file-icons-san-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159.594 373.61L0 405.94V512l424.344-85.966v-.53zM0 295.948v1.117l2.804-.568zM156.79 158.62L0 190.384l266.08 52.155l155.46-31.495v-.53zm267.554 30.614L0 106.059V0l424.344 83.176zM0 214.935l424.344 83.176v106.058L0 320.992z"></svg:path>`,
})
export class FileIconsSanIcon {
  readonly viewBox = input("0 0 425 512")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
