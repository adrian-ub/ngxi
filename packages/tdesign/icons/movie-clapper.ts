import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMovieClapperIcon],svg[tdesign-movie-clapper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h4.865L5.532 4zm4.135 0l3.333 4h4.397l-3.333-4zm7 0l3.333 4H20V4zM20 10H4v10h16zm-5 4H9v-2h6z"></svg:path>`,
})
export class TdesignMovieClapperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
