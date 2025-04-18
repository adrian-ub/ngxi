import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEditNameIcon],svg[icon-park-solid-edit-name-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="currentColor"></svg:circle><svg:path d="M4 41c0-8.837 8.059-16 18-16"></svg:path><svg:path fill="currentColor" d="m31 42l10-10l-4-4l-10 10v4z"></svg:path></svg:g>`,
})
export class IconParkSolidEditNameIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
