import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSyllabaryKatakanaIcon],svg[mdi-syllabary-katakana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h14v.09l-3.71 3.7l1.42 1.42L20 6.91V4m-9 5v4c0 2.78-.75 3.89-2.64 5.46L9.64 20c2.11-1.76 3.36-3.78 3.36-7V9Z"></svg:path>`,
})
export class MdiSyllabaryKatakanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
