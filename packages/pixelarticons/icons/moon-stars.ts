import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoonStarsIcon],svg[pixelarticons-moon-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2zM8 4h8v2h-2v2h-2V6H8zM6 8V6h2v2zm0 8H4V8h2zm2 2H6v-2h2zm8 0v2H8v-2zm2-2v2h-2v-2zm-2-4v-2h2V8h2v8h-2v-4zm-4 0h4v2h-4zm0 0V8h-2v4zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4z"></svg:path>`,
})
export class PixelarticonsMoonStarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
