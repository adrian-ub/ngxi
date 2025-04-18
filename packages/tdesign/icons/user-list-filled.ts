import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserListFilledIcon],svg[tdesign-user-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M11.75 22H2v-2a6 6 0 0 1 6-6h3.75zm2-8h8.5v2h-8.5zm0 3h8.5v2h-8.5zm0 3h8.5v2h-8.5z"></svg:path>`,
})
export class TdesignUserListFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
