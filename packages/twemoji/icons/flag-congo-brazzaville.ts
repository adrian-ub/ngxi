import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagCongoBrazzavilleIcon],svg[twemoji-flag-congo-brazzaville-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009543" d="M4 5a4 4 0 0 0-4 4v18c0 1.104.448 2.104 1.172 2.828L26 5z"></svg:path><svg:path fill="#FBDE4A" d="M32 5h-6L1.172 29.828A4 4 0 0 0 4 31h6L34.828 6.172A4 4 0 0 0 32 5"></svg:path><svg:path fill="#DC241F" d="M10 31h22a4 4 0 0 0 4-4V9a4 4 0 0 0-1.172-2.828z"></svg:path>`,
})
export class TwemojiFlagCongoBrazzavilleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
