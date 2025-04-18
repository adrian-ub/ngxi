import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNetflixLineIcon],svg[ri-netflix-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.985 17.208L16.001 2h2v20a7.6 7.6 0 0 0-2.02-.5L8 6.302V21.5a7.3 7.3 0 0 0-2 .5V2h2z"></svg:path>`,
})
export class RiNetflixLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
