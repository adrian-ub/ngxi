import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForCongoBrazzavilleIcon],svg[emojione-flag-for-congo-brazzaville-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M57 15.5h-8.5l-33 33V57c4.7 3.1 10.4 5 16.5 5c16.6 0 30-13.4 30-30c0-6.1-1.8-11.8-5-16.5"></svg:path><svg:path fill="#75a843" d="M32 2C15.4 2 2 15.4 2 32c0 6.1 1.8 11.8 5 16.5h8.5l33.1-33.1V7C43.8 3.8 38.1 2 32 2"></svg:path><svg:path fill="#ffe62e" d="M7 48.5c1.1 1.7 2.4 3.2 3.8 4.7c1.4 1.4 3 2.7 4.7 3.8L57 15.5A28.7 28.7 0 0 0 48.5 7z"></svg:path>`,
})
export class EmojioneFlagForCongoBrazzavilleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
