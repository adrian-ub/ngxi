import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconRuby24Icon],svg[octicon-ruby-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.873 3.26A.75.75 0 0 1 6.44 3h11.31c.223 0 .434.099.576.27l5 6a.75.75 0 0 1-.028.992l-10.75 11.5a.75.75 0 0 1-1.096 0l-10.75-11.5a.75.75 0 0 1-.02-1.003zm.91 1.24L2.258 9.73L12 20.153l9.75-10.43L17.399 4.5Z"></svg:path>`,
})
export class OcticonRuby24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
