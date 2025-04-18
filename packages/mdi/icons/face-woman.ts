import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFaceWomanIcon],svg[mdi-face-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 13a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0M22 12v10H2V12C2 6.5 6.5 2 12 2s10 4.5 10 10M4 12c0 4.41 3.59 8 8 8s8-3.59 8-8c0-.79-.12-1.55-.33-2.26A9.97 9.97 0 0 1 9.26 5.77c-.98 2.39-2.85 4.32-5.21 5.37c-.05.28-.05.57-.05.86m5 2.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class MdiFaceWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
