import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psHackerNewsIcon],svg[ps-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v460h460V2zm250 265v113h-40V267L111 68h47l74 150l76-150h45z"></svg:path>`,
})
export class PsHackerNewsIcon {
  readonly viewBox = input("0 0 464 488")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
