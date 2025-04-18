import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesStarAlternateSolidIcon],svg[bubbles-star-alternate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.21 5.957a.98.98 0 0 0-.915-.64h-3.962L8.915 1.3a.977.977 0 0 0-1.834.012L5.667 5.317H1.705a.977.977 0 0 0-.627 1.726l3.354 2.78l-1.407 4.223a.977.977 0 0 0 1.503 1.098L8 12.6l3.471 2.546a.977.977 0 0 0 1.504-1.097l-1.408-4.225l3.362-2.786a.98.98 0 0 0 .282-1.081M10.367 9.09a.67.67 0 0 0-.207.724l1.032 3.098a.167.167 0 0 1-.256.188l-2.542-1.866a.67.67 0 0 0-.788 0l-2.538 1.862a.167.167 0 0 1-.257-.187l1.032-3.098a.67.67 0 0 0-.207-.724L3.05 6.947a.167.167 0 0 1 .106-.296h2.983a.67.67 0 0 0 .629-.446L7.843 3.16a.167.167 0 0 1 .314 0l1.074 3.045a.67.67 0 0 0 .629.446h2.983a.167.167 0 0 1 .106.295z"></svg:path>`,
})
export class BubblesStarAlternateSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
