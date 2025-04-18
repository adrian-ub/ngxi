import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDiaryAltIcon],svg[uil-diary-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M8 20H6V4h2Zm10-1a1 1 0 0 1-1 1h-7V4h7a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilDiaryAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
