import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRightUserIcon],svg[icon-park-outline-right-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8"></svg:circle><svg:path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44"></svg:path><svg:path d="m30 36l-8 8l-4-4"></svg:path></svg:g>`,
})
export class IconParkOutlineRightUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
