import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLuxchat4govIcon],svg[arcticons-luxchat4gov-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 17.5a4 4 0 0 1 4-4h13a4 4 0 0 1 4 4v21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.5 42.5a4 4 0 0 0 0-8h-13a4 4 0 0 1-4-4v-21a4 4 0 0 0-4-4m22 15.832l-1.768 5.336l-1.768-5.336"></svg:path><svg:rect width="3.536" height="5.337" x="22.444" y="21.332" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.768" ry="1.768"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.036 23.1c0-.977-.792-1.768-1.768-1.768h0c-.977 0-1.768.791-1.768 1.767v1.802c0 .976.791 1.767 1.768 1.767h0c.976 0 1.768-.791 1.768-1.767h-1.768"></svg:path>`,
})
export class ArcticonsLuxchat4govIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
