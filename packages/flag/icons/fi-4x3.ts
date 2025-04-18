import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagFi4x3Icon],svg[flag-fi-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#002f6c" d="M0 174.5h640v131H0z"></svg:path><svg:path fill="#002f6c" d="M175.5 0h130.9v480h-131z"></svg:path>`,
})
export class FlagFi4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
