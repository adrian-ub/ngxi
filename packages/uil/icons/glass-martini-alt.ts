import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGlassMartiniAltIcon],svg[uil-glass-martini-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.78 3.62a1 1 0 0 0 .12-1.05A1 1 0 0 0 21 2H3a1 1 0 0 0-.9.57a1 1 0 0 0 .12 1.05L11 14.6V20H5.25a1 1 0 0 0 0 2h13.5a1 1 0 0 0 0-2H13v-5.4ZM5.08 4h13.84l-2.4 3h-9ZM12 12.65L9.08 9h5.84Z"></svg:path>`,
})
export class UilGlassMartiniAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
