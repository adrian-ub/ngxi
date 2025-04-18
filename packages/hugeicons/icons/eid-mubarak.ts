import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEidMubarakIcon],svg[hugeicons-eid-mubarak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 11.805c0 5.354 4.34 9.695 9.695 9.695c4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.463 2.5C5.44 3.68 2.5 7.399 2.5 11.805"></svg:path><svg:path d="M13.25 8.5c-2.424-3 1.711-4.5 2.75-6c1.039 1.5 5.174 3 2.75 6m-5.5 0h5.5m-5.5 0v7m5.5-7v7"></svg:path></svg:g>`,
})
export class HugeiconsEidMubarakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
