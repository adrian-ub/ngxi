import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laIconsIcon],svg[la-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h8v8H7zm10 0h8v8h-8zm-6 2l-3 4h6zm8 0v4h4V9zM7 17h8v8H7zm10 0h8v8h-8zm4 1l-2 3l2 3l2-3zm-10 1a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaIconsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
