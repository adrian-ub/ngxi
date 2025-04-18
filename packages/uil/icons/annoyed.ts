import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAnnoyedIcon],svg[uil-annoyed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6 4a5 5 0 0 0-4.37 2.57a1 1 0 0 0 .37 1.36a1 1 0 0 0 .49.13a1 1 0 0 0 .87-.51A3 3 0 0 1 15 15a1 1 0 0 0 0-2m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilAnnoyedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
