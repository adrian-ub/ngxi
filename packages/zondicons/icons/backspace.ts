import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBackspaceIcon],svg[zondicons-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 10l7-7h13v14H7zm14.41 0l2.13-2.12l-1.42-1.42L13 8.6l-2.12-2.13l-1.42 1.42L11.6 10l-2.13 2.12l1.42 1.42L13 11.4l2.12 2.13l1.42-1.42L14.4 10z"></svg:path>`,
})
export class ZondiconsBackspaceIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
