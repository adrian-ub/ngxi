import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUserBusinessIcon],svg[icon-park-solid-user-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="currentColor"></svg:circle><svg:path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44"></svg:path><svg:path fill="currentColor" d="m24 44l4-5l-4-13l-4 13z"></svg:path></svg:g>`,
})
export class IconParkSolidUserBusinessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
