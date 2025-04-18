import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserPasswordFilledIcon],svg[tdesign-user-password-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M2 22h9.5v-8H8a6 6 0 0 0-6 6zm19-10h-4v4.003h-1.953L13.5 17.14v5.36h9v-5.36l-1.547-1.137H19V14h2z"></svg:path>`,
})
export class TdesignUserPasswordFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
