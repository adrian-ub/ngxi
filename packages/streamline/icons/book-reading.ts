import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBookReadingIcon],svg[streamline-book-reading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V8.25A1.25 1.25 0 0 1 8.25 7v0A1.25 1.25 0 0 1 9.5 8.25V11h2a2 2 0 0 1 2 2v.5M6.257 3.095A8.24 8.24 0 0 0 1.51.51a.886.886 0 0 0-1.01.877v7.13a.886.886 0 0 0 .788.886a8.2 8.2 0 0 1 3.9 1.627m1.07-5.172V3.095m4.968 6.307a.886.886 0 0 0 .789-.886v-7.13a.886.886 0 0 0-1.01-.877a8.24 8.24 0 0 0-4.748 2.586"></svg:path>`,
})
export class StreamlineBookReadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
