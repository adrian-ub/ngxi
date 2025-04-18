import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMovieIcon],svg[zmdi-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 21h86v299q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h21l43 86h64l-43-86h43l42 86h64l-42-86h42l43 86h64z"></svg:path>`,
})
export class ZmdiMovieIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
