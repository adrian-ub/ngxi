import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEe4x3Icon],svg[flag-ee-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1791ff" d="M0 0h640v160H0z"></svg:path><svg:path fill="#000001" d="M0 160h640v160H0z"></svg:path><svg:path fill="#fff" d="M0 320h640v160H0z"></svg:path>`,
})
export class FlagEe4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
