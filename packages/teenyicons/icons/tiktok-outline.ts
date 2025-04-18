import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTiktokOutlineIcon],svg[teenyicons-tiktok-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 0v11A3.5 3.5 0 1 1 6 7.5m8-2A4.5 4.5 0 0 1 9.5 1"></svg:path>`,
})
export class TeenyiconsTiktokOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
