import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsKeyboardIcon],svg[pixelarticons-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM5 19V5h14v14zM9 7H7v2h2zm8 8H7v2h10zm-2-8h2v2h-2zm-2 0h-2v2h2zm-6 4h2v2H7zm10 0h-2v2h2zm-6 0h2v2h-2z"></svg:path>`,
})
export class PixelarticonsKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
