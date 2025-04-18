import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsShuffleIcon],svg[zondicons-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18zM16 4V1l4 4l-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17L11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4l-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41z"></svg:path>`,
})
export class ZondiconsShuffleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
