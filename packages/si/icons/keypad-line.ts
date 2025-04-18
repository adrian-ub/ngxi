import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siKeypadLineIcon],svg[si-keypad-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7-7a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM5 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path>`,
})
export class SiKeypadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
