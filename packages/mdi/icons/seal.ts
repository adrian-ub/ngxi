import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSealIcon],svg[mdi-seal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.39 19.37L16.38 18L15 22l-3.08-6L9 22l-1.38-4l-4.01 1.37l2.92-6A6.97 6.97 0 0 1 5 9a7 7 0 0 1 7-7a7 7 0 0 1 7 7c0 1.65-.57 3.17-1.53 4.37zM7 9l2.69 1.34l-.19 3l2.5-1.66l2.5 1.65l-.17-2.99L17 9l-2.68-1.35l.18-2.98L12 6.31L9.5 4.65l.17 3.01z"></svg:path>`,
})
export class MdiSealIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
