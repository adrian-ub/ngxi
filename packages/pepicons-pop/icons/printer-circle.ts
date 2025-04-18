import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPrinterCircleIcon],svg[pepicons-pop-printer-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 6v4a1 1 0 0 1-2 0V6c0-1.068.776-2 1.833-2h8.334C18.224 4 19 4.932 19 6v4a1 1 0 1 1-2 0V6z"></svg:path><svg:path d="M7 9h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3"></svg:path><svg:path d="M9 19.8V15a1 1 0 1 0-2 0v4.8c0 1.154.727 2.2 1.833 2.2h8.334C18.273 22 19 20.954 19 19.8V15a1 1 0 1 0-2 0v4.8a.7.7 0 0 1-.029.2H9.029A.7.7 0 0 1 9 19.8"></svg:path><svg:path d="M10 19a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm0-2a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopPrinterCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
