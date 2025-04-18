import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiDressIcon],svg[arcticons-emoji-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 17.439l-3.8-5V5.5h-3.176v6.94c0 3.486 2.31 11.542 2.31 11.542L12.458 42.5h23.084l-6.876-18.518s2.31-8.056 2.31-11.542V5.5H27.8v6.94zm-4.666 6.543h9.332"></svg:path>`,
})
export class ArcticonsEmojiDressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
