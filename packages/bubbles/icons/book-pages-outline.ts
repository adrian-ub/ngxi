import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBookPagesOutlineIcon],svg[bubbles-book-pages-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><svg:path d="m1.218.457l4.468 1.786A.5.5 0 0 1 6 2.707v8.424a.5.5 0 0 1-.686.463l-4-1.6A.5.5 0 0 1 1 9.532V.87a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-.5.5h-1"></svg:path><svg:path d="m1.276.422l5.818 1.119a.5.5 0 0 1 .406.491v8.338a.5.5 0 0 1-.5.5H6"></svg:path></svg:g>`,
})
export class BubblesBookPagesOutlineIcon {
  readonly viewBox = input("0 0 10 12")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
