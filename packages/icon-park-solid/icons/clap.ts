import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidClapIcon],svg[icon-park-solid-clap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSClap0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-path="url(#ipSClap1)"><svg:path d="M17.118 26.013L9.253 12.39a1.605 1.605 0 0 0-2.896 1.36l5.52 14.918c.082.22.123.452.125.686l.057 12.672a2 2 0 0 0 2 1.991h4.957a2 2 0 0 0 1.954-2.426L18 28l-.882-1.987ZM12 29l6-1m12.564-2.271l7.69-13.322a1.625 1.625 0 0 1 2.947 1.337l-5.106 14.977a2.002 2.002 0 0 0-.105.573l-.466 12.798a2 2 0 0 1-2 1.928h-4.963a2 2 0 0 1-1.94-2.485L30 28l.334-1.665a2 2 0 0 1 .229-.606ZM30 28l6 1M15 7l3.5 4M23 4l1 6m9-4l-3 4"></svg:path></svg:g><svg:defs><svg:clippath id="ipSClap1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSClap0)"></svg:path>`,
})
export class IconParkSolidClapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
