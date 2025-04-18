import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterMIcon],svg[gravity-ui-circle-letter-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4-2.084a.916.916 0 0 0-1.656-.539L8 7.225L6.656 5.377A.916.916 0 0 0 5 5.916v4.334a.75.75 0 0 0 1.5 0V7.713l.893 1.228a.75.75 0 0 0 1.214 0L9.5 7.713v2.537a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterMIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
