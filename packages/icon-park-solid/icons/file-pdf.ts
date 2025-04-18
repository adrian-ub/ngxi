import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFilePdfIcon],svg[icon-park-solid-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFilePdf0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M10 4h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M18 18h12v7.992L18.008 26z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 18v16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFilePdf0)"></svg:path>`,
})
export class IconParkSolidFilePdfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
