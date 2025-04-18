import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangMniIcon],svg[circle-flags-lang-mni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangMni0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangMni0)"><svg:path fill="#d80027" d="M0 0h512v73L256 96L0 73Z"></svg:path><svg:path fill="#eee" d="M0 73h512v73l-256 23L0 146Z"></svg:path><svg:path fill="#333" d="M0 146h512v73l-256 23L0 219Z"></svg:path><svg:path fill="#ffda44" d="M0 219h512v74l-256 22L0 293Z"></svg:path><svg:path fill="#4a1f63" d="M0 293h512v73l-256 23L0 366Z"></svg:path><svg:path fill="#338af3" d="M0 366h512v73l-256 23L0 439Z"></svg:path><svg:path fill="#6da544" d="M0 439h512v73H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLangMniIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
