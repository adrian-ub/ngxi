import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsExclamIcon],svg[ls-exclam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h73v570H2zM0 652h77v77H0z"></svg:path>`,
})
export class LsExclamIcon {
  readonly viewBox = input("0 0 77 729")
  readonly width = input("0.11em")
  readonly height = input("1em")
}
