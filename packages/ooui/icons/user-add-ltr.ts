import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUserAddLtrIcon],svg[ooui-user-add-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.5" cy="10.5" r="3.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 0v4h-4v2h4v4h2V6h4V4h-4V0zM8 15c-4.6 0-7 2.69-7 4.23V20h14v-.77C15 17.69 12.6 15 8 15"></svg:path>`,
})
export class OouiUserAddLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
