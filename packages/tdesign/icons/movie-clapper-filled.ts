import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMovieClapperFilledIcon],svg[tdesign-movie-clapper-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM4 8V4h1.532l3.333 4zm7.468 0L8.135 4h4.397l3.333 4zm7 0l-3.333-4H20v4zM9 14v-2h6v2z"></svg:path>`,
})
export class TdesignMovieClapperFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
