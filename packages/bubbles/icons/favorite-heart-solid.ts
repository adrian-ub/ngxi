import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFavoriteHeartSolidIcon],svg[bubbles-favorite-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.702 1.705a4.36 4.36 0 0 0-5.486 1.23L8 3.185l-.187-.213a4.374 4.374 0 0 0-5.514-1.266a4.48 4.48 0 0 0-.753 7.303l5.486 5.384a1.354 1.354 0 0 0 1.928.008l5.451-5.352A4.48 4.48 0 0 0 16 5.622a4.43 4.43 0 0 0-2.298-3.917"></svg:path>`,
})
export class BubblesFavoriteHeartSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
