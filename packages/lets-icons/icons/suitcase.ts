import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSuitcaseIcon],svg[lets-icons-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm3-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-5 4h4"></svg:path><svg:rect width="3" height="3" x="7" y="19" fill="currentColor" rx=".5"></svg:rect><svg:rect width="3" height="3" x="14" y="19" fill="currentColor" rx=".5"></svg:rect></svg:g>`,
})
export class LetsIconsSuitcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
