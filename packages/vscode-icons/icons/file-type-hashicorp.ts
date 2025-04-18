import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeHashicorpIcon],svg[vscode-icons-file-type-hashicorp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="m13.8 2l-11 6.3v15.4L6.9 26V10.7l6.9-4z"></svg:path><svg:path fill="#FFF" d="M18.2 2v12.2h-4.4V9.7L9.7 12v15.6l4.1 2.4V17.9h4.4v4.4l4.1-2.3V4.4z"></svg:path><svg:path fill="#FFF" d="m18.2 30l11-6.3V8.3L25.1 6v15.3l-6.9 4z"></svg:path>`,
})
export class VscodeIconsFileTypeHashicorpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
