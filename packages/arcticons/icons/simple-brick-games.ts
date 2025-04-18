import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimpleBrickGamesIcon],svg[arcticons-simple-brick-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.125 4.5h9.75v29.25h-9.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.375 14.25h29.25V24H9.375zm0 19.5h9.75v9.75h-9.75zm19.5 0h9.75v9.75h-9.75z"></svg:path>`,
})
export class ArcticonsSimpleBrickGamesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
