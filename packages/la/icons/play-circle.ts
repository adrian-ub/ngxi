import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPlayCircleIcon],svg[la-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4 3.125v13.75L13.5 22l9-5.125L24 16l-1.5-.875l-9-5.125zm2 3.438L19.969 16L14 19.438z"></svg:path>`,
})
export class LaPlayCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
