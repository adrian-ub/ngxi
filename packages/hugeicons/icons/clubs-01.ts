import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsClubs01Icon],svg[hugeicons-clubs-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14 13l-2-3l-2 3m4.5-7.5C14.5 8 12 10 12 10S9.5 8 9.5 5.5S10.62 2 12 2s2.5 1 2.5 3.5m4 10C16 15.5 14 13 14 13s2-2.5 4.5-2.5S22 11.62 22 13s-1 2.5-3.5 2.5m-13 0C8 15.5 10 13 10 13s-2-2.5-4.5-2.5S2 11.62 2 13s1 2.5 3.5 2.5M16 22s-3-6-6-9"></svg:path><svg:path d="M8 22s3-6 6-9"></svg:path></svg:g>`,
})
export class HugeiconsClubs01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
