import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPrisonIcon],svg[maki-prison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1v13H12V1zm6 1H11v3.5H9.5zm-5 .055H6V7H4.5zm2.5 0h1.5V7H7zM10.25 6.5a.75.75 0 0 1 0 1.5a.75.75 0 0 1 0-1.5M7 8h1.473l.027 5H7.027zm-2.5.166H6V13H4.5zM9.5 9H11v4H9.5z"></svg:path>`,
})
export class MakiPrisonIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
