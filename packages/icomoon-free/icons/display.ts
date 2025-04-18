import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeDisplayIcon],svg[icomoon-free-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v10h16V1zm15 9H1V2h14zm-4.5 2h-5L5 14l-1 1h8l-1-1z"></svg:path>`,
})
export class IcomoonFreeDisplayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
