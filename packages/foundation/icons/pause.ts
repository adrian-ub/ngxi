import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPauseIcon],svg[foundation-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.531 19.959c-.097 0-.19.016-.283.029v-.029H29.911a2.163 2.163 0 0 0-2.163 2.163v.005h-.001V77.87h.001l-.001.009c0 1.194.969 2.162 2.163 2.162h10.62a2.16 2.16 0 0 0 2.162-2.162l-.001-.009h.001V22.127l.001-.005a2.163 2.163 0 0 0-2.162-2.163m31.72 57.911V22.127l.001-.005a2.163 2.163 0 0 0-2.162-2.163c-.097 0-.19.016-.283.029v-.029H59.47a2.163 2.163 0 0 0-2.163 2.163v.005h-.001V77.87h.001l-.001.009c0 1.194.969 2.162 2.163 2.162h10.618a2.16 2.16 0 0 0 2.162-2.162q.002-.004.002-.009"></svg:path>`,
})
export class FoundationPauseIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
