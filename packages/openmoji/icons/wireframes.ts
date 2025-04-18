import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWireframesIcon],svg[openmoji-wireframes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M11 15.959h50v39.998H11z"></svg:path><svg:path fill="#3F3F3F" d="M14.984 24.988h8v11.083h-8z"></svg:path><svg:path fill="#9B9B9A" d="M56.43 51.905H31.902V25.5H56.43v13.972z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M11 15.959h50v39.998H11zm1.058 4.854h48.068M27.25 55.324V20.813"></svg:path><svg:path d="M14.984 24.988h8v11.083h-8zM56.43 51.905H31.902V25.5H56.43v13.972zM14.893 42.78h5.098m-5.098 4h8.308m-8.308 4h5.098m11.911 1.125L56.43 25.5m-24.528 0L56.43 51.905"></svg:path></svg:g>`,
})
export class OpenmojiWireframesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
