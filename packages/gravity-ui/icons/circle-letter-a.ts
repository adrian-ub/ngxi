import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterAIcon],svg[gravity-ui-circle-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.791 5.338a1.291 1.291 0 0 1 2.418 0l1.743 4.649a.75.75 0 1 1-1.404.526L9.168 9.5H6.832l-.38 1.013a.75.75 0 1 1-1.404-.526zM8 6.386L8.605 8h-1.21z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
