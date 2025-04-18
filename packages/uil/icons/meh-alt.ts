import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMehAltIcon],svg[uil-meh-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m6 3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m0-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilMehAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
