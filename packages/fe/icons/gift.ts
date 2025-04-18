import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feGiftIcon],svg[fe-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 12v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.17A3 3 0 1 1 12 5a3 3 0 1 1 5.83 1H19a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-8-4H5v2h6zm2 0v2h6V8zm-6 4v8h10v-8zm2-6h1V5a1 1 0 1 0-1 1m6 0a1 1 0 1 0-1-1v1z"></svg:path>`,
})
export class FeGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
