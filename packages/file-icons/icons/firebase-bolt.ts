import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsFirebaseBoltIcon],svg[file-icons-firebase-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v278.831h83.547V512L272 197.081H160.806L272 0z"></svg:path>`,
})
export class FileIconsFirebaseBoltIcon {
  readonly viewBox = input("0 0 272 512")
  readonly width = input("0.54em")
  readonly height = input("1em")
}
