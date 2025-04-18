import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEarth1SolidIcon],svg[streamline-earth-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.502 7a5.498 5.498 0 0 1 7.702-5.038v.276a1.68 1.68 0 0 1-1.68 1.68a1.68 1.68 0 0 0-1.68 1.736v1.388a1.68 1.68 0 0 1-1.68 1.68H1.777A5.5 5.5 0 0 1 1.502 7m8.212 4.782a5.5 5.5 0 0 0 2.518-3.089l-.136-.1a3.2 3.2 0 0 0-1.417-.354H8.807a1.543 1.543 0 0 0 0 3.074a1.09 1.09 0 0 1 .907.47ZM7 .002a6.998 6.998 0 1 0 0 13.996A6.998 6.998 0 0 0 7 .002" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEarth1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
