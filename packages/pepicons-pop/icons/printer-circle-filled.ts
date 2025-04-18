import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPrinterCircleFilledIcon],svg[pepicons-pop-printer-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPrinterCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M8 10V6c0-.552.373-1 .833-1h8.334c.46 0 .833.448.833 1v4" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M9 6v4a1 1 0 0 1-2 0V6c0-1.068.776-2 1.833-2h8.334C18.224 4 19 4.932 19 6v4a1 1 0 1 1-2 0V6z"></svg:path><svg:path fill="#000" d="M7 9h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M8 15v4.8c0 .663.373 1.2.833 1.2h8.334c.46 0 .833-.537.833-1.2V15" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M9 19.8V15a1 1 0 1 0-2 0v4.8c0 1.154.727 2.2 1.833 2.2h8.334C18.273 22 19 20.954 19 19.8V15a1 1 0 1 0-2 0v4.8a.7.7 0 0 1-.029.2H9.029A.7.7 0 0 1 9 19.8"></svg:path><svg:path fill="#000" d="M10 19a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm0-2a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1z"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPrinterCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPrinterCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
