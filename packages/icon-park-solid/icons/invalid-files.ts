import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidInvalidFilesIcon],svg[icon-park-solid-invalid-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSInvalidFiles0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M8 44V4h23l9 10.5V44z"></svg:path><svg:path fill="#000" stroke="#000" d="M34 25c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10a9.97 9.97 0 0 1 6.865 2.729A9.97 9.97 0 0 1 34 25"></svg:path><svg:path stroke="#000" d="m17 18l14 14m3-7c0 5.523-4.477 10-10 10M14 25c0-5.523 4.477-10 10-10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSInvalidFiles0)"></svg:path>`,
})
export class IconParkSolidInvalidFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
