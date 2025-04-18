import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilShuffleIcon],svg[uil-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a1 1 0 0 0 1-1V5.41L8.56 10A1 1 0 0 0 10 10a1 1 0 0 0 0-1.41L5.41 4H9a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 2 3v6a1 1 0 0 0 1 1m12.3 4a1 1 0 0 0-1.41 1.41l6.27 6.28a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42ZM9 20H5.41l16.3-16.29a1 1 0 1 0-1.42-1.42L4 18.59V15a1 1 0 0 0-2 0v6a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54A1 1 0 0 0 3 22h6a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
