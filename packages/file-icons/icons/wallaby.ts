import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsWallabyIcon],svg[file-icons-wallaby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h256V0h256v512H0z"></svg:path>`,
})
export class FileIconsWallabyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
