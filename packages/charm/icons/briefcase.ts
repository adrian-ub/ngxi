import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBriefcaseIcon],svg[charm-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 4.75h12.5v9.5H1.75z"></svg:path><svg:path d="M1.75 6.25s-.5 3.5 3 3.5h6.5c3.5 0 3-3.5 3-3.5m-8.5-2v-2.5h4.5v2.5"></svg:path></svg:g>`,
})
export class CharmBriefcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
