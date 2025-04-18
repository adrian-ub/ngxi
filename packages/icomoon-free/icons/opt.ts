import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeOptIcon],svg[icomoon-free-opt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 13h-4a.5.5 0 0 1-.457-.297L6.175 4H1.5a.5.5 0 0 1 0-1h5c.198 0 .377.116.457.297L10.825 12H14.5a.5.5 0 0 1 0 1m0-9h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1"></svg:path>`,
})
export class IcomoonFreeOptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
