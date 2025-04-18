import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAppletClosedIcon],svg[icon-park-applet-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 42L33 33M6 6L15 15L6 6Z"></svg:path><svg:path d="M6 42L15 33M42 6L33 15L42 6Z"></svg:path><svg:path fill="#2F88FF" d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"></svg:path></svg:g>`,
})
export class IconParkAppletClosedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
