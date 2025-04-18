import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkProgressIcon],svg[nrk-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" opacity=".3"></svg:circle><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1v2a9 9 0 1 1-9 9z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class NrkProgressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
