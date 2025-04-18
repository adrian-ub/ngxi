import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserMarkedFilledIcon],svg[tdesign-user-marked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m8.75 6h8.5v10.295l-4.247-2.617l-4.253 2.614zm-2 8.5H2v-2a6 6 0 0 1 6-6h4.75z"></svg:path>`,
})
export class TdesignUserMarkedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
