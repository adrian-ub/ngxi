import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRockingChairIcon],svg[hugeicons-rocking-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 8v6m4-6v6m-8 0h11m-2 0l2 6M4 2l4 12l-2 6"></svg:path><svg:path d="M6 8h10.5A1.5 1.5 0 0 1 18 9.5M4 18c1.726 2.412 4.665 4 8 4s6.274-1.588 8-4"></svg:path></svg:g>`,
})
export class HugeiconsRockingChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
