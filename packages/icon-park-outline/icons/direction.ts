import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDirectionIcon],svg[icon-park-outline-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" stroke="currentColor" stroke-width="4" rx="3"></svg:rect><svg:path fill="currentColor" d="m23.293 10.565l-3.243 3.242c-.63.63-.183 1.708.707 1.708h6.486c.89 0 1.337-1.078.707-1.708l-3.243-3.242a1 1 0 0 0-1.414 0M10.565 24.707l3.242 3.243c.63.63 1.708.183 1.708-.707v-6.486c0-.89-1.078-1.337-1.708-.707l-3.242 3.243a1 1 0 0 0 0 1.414m14.142 12.728l3.243-3.242c.63-.63.183-1.708-.707-1.708h-6.486c-.89 0-1.337 1.078-.707 1.708l3.243 3.242a1 1 0 0 0 1.414 0m12.728-14.142l-3.242-3.243c-.63-.63-1.708-.183-1.708.707v6.486c0 .89 1.078 1.337 1.708.707l3.242-3.243a1 1 0 0 0 0-1.414"></svg:path></svg:g>`,
})
export class IconParkOutlineDirectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
