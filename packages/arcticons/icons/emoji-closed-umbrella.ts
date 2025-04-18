import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiClosedUmbrellaIcon],svg[arcticons-emoji-closed-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.066 24.14c1.338-.33 2.428-2.113 2.44-3.154c1.132-.193 2.484-1.15 2.83-2.48c1.225.463 2.867-.033 3.524-1.177c.973.697 2.936.654 4.03-.569l6.478 25.74z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.334 18.508l-6.996-11.97c-1.357-2.32-4.746-.346-3.392 1.97"></svg:path>`,
})
export class ArcticonsEmojiClosedUmbrellaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
