import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterFfIcon],svg[carbon-letter-ff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V9H8v14h2v-6h5v-2h-5v-4zm8 0V9h-3a2 2 0 0 0-2 2v2h-2v2h2v8h2v-8h3v-2h-3v-2z"></svg:path>`,
})
export class CarbonLetterFfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
