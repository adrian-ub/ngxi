import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHujiIcon],svg[arcticons-huji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.356 15.056v5.864a2.904 2.904 0 0 0 5.808 0v-5.864M13.59 19.424h5.808m0-4.368v8.768m-5.808-8.768v8.768m17.535-8.768v6.96a3.83 3.83 0 0 1-1.686 3.177m4.973-10.137v8.768"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 30.5h37m0 4h-37"></svg:path>`,
})
export class ArcticonsHujiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
