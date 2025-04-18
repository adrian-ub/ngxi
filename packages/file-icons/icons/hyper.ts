import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsHyperIcon],svg[file-icons-hyper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M289.381 382H512v42H289.381zm-68.3-108.52L25.106 444.233l60.997-149.45L0 238.503L195.992 67.768l-66.34 158.968z"></svg:path>`,
})
export class FileIconsHyperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
