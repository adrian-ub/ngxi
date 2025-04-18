import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAppletClosedIcon],svg[icon-park-outline-applet-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m42 42l-9-9M6 6l9 9zm0 36l9-9M42 6l-9 9zM24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path>`,
})
export class IconParkOutlineAppletClosedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
