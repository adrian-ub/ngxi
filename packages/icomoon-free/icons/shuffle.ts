import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeShuffleIcon],svg[icomoon-free-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h-1.586l-2.5-2.5l2.5-2.5H12v2.5L15.5 5L12 1.5V4h-2a1 1 0 0 0-.707.293L6.5 7.086L3.707 4.293A1 1 0 0 0 3 4H0v2h2.586l2.5 2.5l-2.5 2.5H0v2h3c.265 0 .52-.105.707-.293L6.5 9.914l2.793 2.793A1 1 0 0 0 10 13h2v2.5l3.5-3.5L12 8.5z"></svg:path>`,
})
export class IcomoonFreeShuffleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
