import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitRequestIcon],svg[charm-git-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12.5" cy="12.5" r="1.75"></svg:circle><svg:circle cx="3.5" cy="12.5" r="1.75"></svg:circle><svg:circle cx="3.5" cy="3.5" r="1.75"></svg:circle><svg:path d="m9.25 1.75l-1.5 2l1.5 2m3 4.5v-5q0-1.5-1.5-1.5h-2m-5 2v4.5"></svg:path></svg:g>`,
})
export class CharmGitRequestIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
