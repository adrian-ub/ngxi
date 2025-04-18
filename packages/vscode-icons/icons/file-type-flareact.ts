import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFlareactIcon],svg[vscode-icons-file-type-flareact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeFlareact0" x1="305.289" x2="307.299" y1="875.967" y2="848.006" gradientTransform="translate(-290 -846)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ffebc8"></svg:stop><svg:stop offset="1" stop-color="#ffa95f"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeFlareact1" x1="305.465" x2="306.435" y1="873.262" y2="859.512" gradientTransform="translate(-290 -846)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fab743"></svg:stop><svg:stop offset="1" stop-color="#ee6f05"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeFlareact0)" d="M26.614 20.792c-.41 5.46-5.52 9.56-11.39 9.17s-10.27-5.13-9.84-10.58c.57-7.52 12-17.37 12-17.37c-3.66 10 10 8.82 9.23 18.78"></svg:path><svg:path fill="url(#vscodeIconsFileTypeFlareact1)" d="M10.554 22.742a5 5 0 0 0 4.8 5.189h.026a5.1 5.1 0 0 0 5.58-4.49c.29-3.7-4.52-9.2-4.52-9.2c1.034 5.101-5.506 3.631-5.886 8.501"></svg:path>`,
})
export class VscodeIconsFileTypeFlareactIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
