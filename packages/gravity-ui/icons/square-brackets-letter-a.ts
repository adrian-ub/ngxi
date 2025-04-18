import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareBracketsLetterAIcon],svg[gravity-ui-square-brackets-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 3.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h1.01a.75.75 0 0 1 0 1.5H3.25A2.25 2.25 0 0 1 1 11.75v-7.5A2.25 2.25 0 0 1 3.25 2h1.01a.75.75 0 0 1 0 1.5zm7.74-.75a.75.75 0 0 1 .75-.75h1.01A2.25 2.25 0 0 1 15 4.25v7.5A2.25 2.25 0 0 1 12.75 14h-1.01a.75.75 0 0 1 0-1.5h1.01a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-1.01a.75.75 0 0 1-.75-.75m-4.2 2.588a1.291 1.291 0 0 1 2.418 0l1.743 4.649a.75.75 0 1 1-1.404.526L9.168 9.5H6.832l-.38 1.013a.75.75 0 1 1-1.404-.526zM7.395 8h1.21L8 6.386z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareBracketsLetterAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
