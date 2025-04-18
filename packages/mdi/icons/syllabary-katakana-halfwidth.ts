import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSyllabaryKatakanaHalfwidthIcon],svg[mdi-syllabary-katakana-halfwidth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v2h6l-1 4.81l2 .39l1-5.1V4m-6 5v3c0 2.86-.66 5.29-1.92 6.61L9.5 20c1.85-1.92 2.5-4.85 2.5-8V9Z"></svg:path>`,
})
export class MdiSyllabaryKatakanaHalfwidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
