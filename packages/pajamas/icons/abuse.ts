import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasAbuseIcon],svg[pajamas-abuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.308 1.5L1.5 5.308v5.384L5.308 14.5h5.384l3.808-3.808V5.308L10.692 1.5zM11.314 0H4.686L0 4.686v6.628L4.686 16h6.628L16 11.314V4.686zM9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasAbuseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
