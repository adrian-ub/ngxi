import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSpinIcon],svg[uil-spin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3a7 7 0 0 0 0 14a5 5 0 0 0 0-10a3 3 0 0 0 0 6a1 1 0 0 0 0-2a1 1 0 0 1 0-2a3 3 0 0 1 0 6a5 5 0 0 1 0-10a7 7 0 0 1 0 14a9 9 0 0 1-9-9a1 1 0 0 0-2 0a11 11 0 0 0 11 11a9 9 0 0 0 0-18"></svg:path>`,
})
export class UilSpinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
