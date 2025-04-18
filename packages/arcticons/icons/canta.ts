import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCantaIcon],svg[arcticons-canta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.06 13.34v23.45a4 4 0 0 1-4 4H12.43a4.49 4.49 0 0 1-4.49-4.48V13.34z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.33 28.76v7.64h9.34m-9.34-7.64h-3.34m16.02 0h-3.34m0 0v7.63M16 28.76l8-9.15m8.01 9.15L24 19.61M6 8.98h9.5l1.47-1.7h14.06l1.45 1.61l9.52.09v4.23H6z"></svg:path>`,
})
export class ArcticonsCantaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
