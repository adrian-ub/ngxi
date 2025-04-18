import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBikeIcon],svg[humbleicons-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 10.5l-.6-.8a1 1 0 0 0 .153 1.694zm4 2l.99.141a1 1 0 0 0-.543-1.035zm-1.49 3.359a1 1 0 1 0 1.98.282zM12.5 7.5l.707-.707A1 1 0 0 0 11.9 6.7zM15 10l-.707.707A1 1 0 0 0 15 11zm2 1a1 1 0 1 0 0-2zm-9 5a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2H2a4 4 0 0 0 4 4zm-2-2a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm2.053-2.606l4 2l.894-1.788l-4-2zm3.457.965l-.5 3.5l1.98.282l.5-3.5zM9.1 11.3l4-3l-1.2-1.6l-4 3zm2.693-3.093l2.5 2.5l1.414-1.414l-2.5-2.5zM15 11h2V9h-2zm5 5a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4zm-2-2a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm-3-9v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V3a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2z"></svg:path>`,
})
export class HumbleiconsBikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
