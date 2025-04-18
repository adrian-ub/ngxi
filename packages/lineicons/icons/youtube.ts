import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsYoutubeIcon],svg[lineicons-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.58 7.194a2.47 2.47 0 0 0-1.773-1.775C18.258 5 12 5 12 5s-6.258 0-7.806.42a2.47 2.47 0 0 0-1.775 1.774C2 8.774 2 12 2 12s0 3.258.42 4.807c.225.87.903 1.548 1.774 1.774C5.742 19 12 19 12 19s6.258 0 7.807-.42a2.47 2.47 0 0 0 1.774-1.773C22 15.258 22 12 22 12s0-3.226-.42-4.806M10 15V9l5.194 3z"></svg:path>`,
})
export class LineiconsYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
