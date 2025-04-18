import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCodeIcon],svg[zondicons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.7 9.3l4.8-4.8l1.4 1.42L2.84 10l4.07 4.07l-1.41 1.42L0 10zm18.6 1.4l.7-.7l-5.49-5.49l-1.4 1.42L17.16 10l-4.07 4.07l1.41 1.42l4.78-4.78z"></svg:path>`,
})
export class ZondiconsCodeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
