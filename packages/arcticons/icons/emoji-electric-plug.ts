import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiElectricPlugIcon],svg[arcticons-emoji-electric-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.784 18.242V7.804A2.305 2.305 0 0 0 18.48 5.5h0a2.305 2.305 0 0 0-2.306 2.304h0v10.438m16.14 0V7.804A2.305 2.305 0 0 0 30.01 5.5h0a2.305 2.305 0 0 0-2.306 2.304h0v10.438"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.318 18.242v8c0 7 5.678 12.675 12.682 12.675s12.682-5.675 12.682-12.676v-8z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.389 38.186l1.153 4.314h6.917l1.153-4.297"></svg:path>`,
})
export class ArcticonsEmojiElectricPlugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
