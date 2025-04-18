import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyNotesIcon],svg[arcticons-fossify-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.498 7.587H25.22M5.498 16.261H25.22M5.498 24.936h10.797m6.204 13.096l.21-4.811l11.86-11.863a3.244 3.244 0 0 1 4.6 0l2.378 2.379a3.246 3.246 0 0 1 0 4.6L29.687 40.2l-4.81.211c-1.12.05-2.427-1.258-2.378-2.379m10.775-8.399l-6.61 6.611"></svg:path>`,
})
export class ArcticonsFossifyNotesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
