import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCm1x1Icon],svg[flag-cm-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#007a5e" d="M0 0h170.7v512H0z"></svg:path><svg:path fill="#ce1126" d="M170.7 0h170.6v512H170.7z"></svg:path><svg:path fill="#fcd116" d="M341.3 0H512v512H341.3z"></svg:path><svg:g fill="#fcd116" transform="translate(256 256)scale(5.6889)"><svg:g id="flagCm1x10"><svg:path id="flagCm1x11" d="M0-8L-2.5-.4L1.3.9z"></svg:path><svg:use width="100%" height="100%" href="#flagCm1x11" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagCm1x10" transform="rotate(72)"></svg:use><svg:use width="100%" height="100%" href="#flagCm1x10" transform="rotate(144)"></svg:use><svg:use width="100%" height="100%" href="#flagCm1x10" transform="rotate(-144)"></svg:use><svg:use width="100%" height="100%" href="#flagCm1x10" transform="rotate(-72)"></svg:use></svg:g>`,
})
export class FlagCm1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
