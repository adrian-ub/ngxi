import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCautionIcon],svg[maki-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.093 11.892L6.84 1.391a.752.752 0 0 1 1.32 0l5.747 10.501a.75.75 0 0 1-.66 1.11H1.753a.75.75 0 0 1-.66-1.11M8.3 8l.403-2.418A.5.5 0 0 0 8.21 5H6.79a.5.5 0 0 0-.493.582L6.7 8zm.3 1.9a1.1 1.1 0 1 0-2.2 0a1.1 1.1 0 0 0 2.2 0"></svg:path>`,
})
export class MakiCautionIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
