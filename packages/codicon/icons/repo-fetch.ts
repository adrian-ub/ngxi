import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRepoFetchIcon],svg[codicon-repo-fetch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="1" height="1" x="8" y="4" rx=".5"></svg:rect><svg:rect width="1" height="1" x="8" y="6" rx=".5"></svg:rect><svg:rect width="1" height="1" x="8" y="2" rx=".5"></svg:rect><svg:rect width="1" height="1" x="8" rx=".5"></svg:rect><svg:path fill-rule="evenodd" d="M8 6.44h1l3.647-3.647l.707.707l-4.5 4.5h-.707l-4.5-4.5l.707-.707zM5.035 12H2v1h3.035a3.5 3.5 0 0 0 6.93 0H15v-1h-3.035a3.501 3.501 0 0 0-6.93 0m5.965.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconRepoFetchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
