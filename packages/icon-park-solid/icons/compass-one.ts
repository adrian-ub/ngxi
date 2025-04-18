import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCompassOneIcon],svg[icon-park-solid-compass-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCompassOne0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c9.389 0 17-7.611 17-17s-7.611-17-17-17S7 17.611 7 27s7.611 17 17 17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 4h10"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m20 27l4-7l4 7l-4 7zM7 27h4m26 0h4M24 10v4m0 26v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M17.5 42.713A17 17 0 0 0 24 44c2.302 0 4.498-.458 6.5-1.287M8.287 20.5A17 17 0 0 0 7 27c0 2.302.458 4.498 1.287 6.5m31.426-13A17 17 0 0 1 41 27c0 2.302-.458 4.498-1.287 6.5m-22.705-22A16.9 16.9 0 0 1 24 10c2.492 0 4.86.536 6.992 1.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCompassOne0)"></svg:path>`,
})
export class IconParkSolidCompassOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
