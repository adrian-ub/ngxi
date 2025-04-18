import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsUnlockSmallOutlineIcon],svg[teenyicons-unlock-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.121 4.121l.354-.353zM5.5 7h4V6h-4zm4.5.5v3h1v-3zM9.5 11h-4v1h4zM5 10.5v-3H4v3zm.5.5a.5.5 0 0 1-.5-.5H4A1.5 1.5 0 0 0 5.5 12zm4.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM9.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 9.5 6zm-4-1A1.5 1.5 0 0 0 4 7.5h1a.5.5 0 0 1 .5-.5zm.5.5v-.879H5V6.5zm2.768-2.025l.378.379l.708-.708l-.38-.378zM7.62 4c.43 0 .843.17 1.147.475l.707-.707A2.62 2.62 0 0 0 7.62 3zM6 5.621C6 4.726 6.726 4 7.621 4V3A2.62 2.62 0 0 0 5 5.621z"></svg:path>`,
})
export class TeenyiconsUnlockSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
