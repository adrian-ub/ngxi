import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlattrIcon],svg[mdi-flattr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 12a9 9 0 0 1-9 9H4.5l5.24-5.24l1.42 1.41L9.33 19H12a7 7 0 0 0 7-7V7l2-2v7M3 12a9 9 0 0 1 9-9h7.5l-5.24 5.24l-1.42-1.41L14.67 5H12a7 7 0 0 0-7 7v5l-2 2v-7z" fill="currentColor"></svg:path>`,
})
export class MdiFlattrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
