import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsFlagIcon],svg[zondicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.667 12H2v8H0V0h12l.333 2H20l-3 6l3 6H8z"></svg:path>`,
})
export class ZondiconsFlagIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
