import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadDrumpadIcon],svg[fad-drumpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 64.001C32 46.328 46.333 32 64.001 32H192c17.672 0 32 14.333 32 32.001V192c0 17.672-14.333 32-32.001 32H64c-17.672 0-32-14.333-32-32.001V64z"></svg:path>`,
})
export class FadDrumpadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
