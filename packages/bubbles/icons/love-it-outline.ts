import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLoveItOutlineIcon],svg[bubbles-love-it-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 21.844l-9.588-10a5.67 5.67 0 0 1-1.063-6.55v0a5.673 5.673 0 0 1 9.085-1.475L12 5.384l1.566-1.565a5.673 5.673 0 0 1 8.023 8.022z"></svg:path>`,
})
export class BubblesLoveItOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
