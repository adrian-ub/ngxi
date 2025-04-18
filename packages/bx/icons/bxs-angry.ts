import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsAngryIcon],svg[bx-bxs-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm-5 8.5l.002-.022l-1.373-.549l.742-1.857l5 2l-.742 1.857l-1.031-.413c-.014.014-.023.031-.037.044A1.499 1.499 0 0 1 7 10.5zM8 17s1-3 4-3s4 3 4 3H8zm8.986-6.507c0 .412-.167.785-.438 1.056a1.488 1.488 0 0 1-2.112 0c-.011-.011-.019-.024-.029-.035l-1.037.415l-.742-1.857l5-2l.742 1.857l-1.386.554a.036.036 0 0 1 .002.01z" fill="currentColor"></svg:path>`,
})
export class BxBxsAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
