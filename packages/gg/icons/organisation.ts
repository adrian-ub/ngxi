import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggOrganisationIcon],svg[gg-organisation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 15h2v2h-2zm2-4h-2v2h2z"></svg:path><svg:path fill-rule="evenodd" d="M13 7h10v14H1V3h12zM8 5h3v2H8zm3 14v-2H8v2zm0-4v-2H8v2zm0-4V9H8v2zm10 8V9h-8v2h2v2h-2v2h2v2h-2v2zM3 19v-2h3v2zm0-4h3v-2H3zm3-4V9H3v2zM3 7h3V5H3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgOrganisationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
