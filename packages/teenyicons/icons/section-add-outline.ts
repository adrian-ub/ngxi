import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSectionAddOutlineIcon],svg[teenyicons-section-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 .5H1.5a1 1 0 0 0-1 1V4M6 .5h3m2 0h2.5a1 1 0 0 1 1 1V4M.5 6v3m14-3v3m-14 2v2.5a1 1 0 0 0 1 1H4M14.5 11v2.5a1 1 0 0 1-1 1H11M7.5 4v7M4 7.5h7m-5 7h3"></svg:path>`,
})
export class TeenyiconsSectionAddOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
