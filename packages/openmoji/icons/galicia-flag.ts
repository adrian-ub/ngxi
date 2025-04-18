import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiGaliciaFlagIcon],svg[openmoji-galicia-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#61b2e4" d="M10.3 17.03c-5.301-.033-5.301-.033-5.432 3.904l56.9 34.13c5.235-.065 5.235-.065 5.202-4.018z"></svg:path><svg:g stroke-linecap="round"><svg:path fill="#1e50a0" stroke="#1e50a0" stroke-linejoin="round" stroke-width="2" d="M31.595 34.055h8.784c0 10.31-2.035 10.34-4.416 10.34c-2.431 0-4.368.094-4.368-10.34"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linejoin="round" stroke-width="1.792" d="M35.985 40.185v3.843"></svg:path><svg:path fill="none" stroke="#fff" stroke-width="2" d="M35.985 37.345v.626"></svg:path><svg:path fill="none" stroke="#d0cfce" stroke-linejoin="round" d="M32.075 40.885c-.484-6.834-.484-6.984 4.154-6.905c4.146.07 4.146.07 3.657 6.928"></svg:path><svg:path fill="none" stroke="#ea5a47" stroke-linejoin="round" stroke-width="3" d="M31.485 31.005c3.306-.871 5.541-.936 8.997-.032"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linejoin="round" d="M30.925 32.425c3.306-.871 6.684-.904 10.14 0"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-width="2" d="m35.965 27.605l.03 3.714m-6.46-2.304l1.396 2.911m11.534-2.911l-1.396 2.911"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiGaliciaFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
