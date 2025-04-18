import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMytIcon],svg[arcticons-myt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 24.882c2.752-3.17 7.64-9.9 8.25-9.5c.727.743-1.98 6.837-2.455 9.25c2.21-1.547 8.439-10.676 9.705-10.25c1.388.426-3.446 10.326-2.75 10.5c4.963-1.947 7.31-4.73 8.5-4.25c-.207 1.347-1.022 3.282-.75 4c.854.3 5.664-3.963 7.5-4c.567 1.108-3 8.667-4.5 13m7-8.5l3.757-10.5H32.5H44"></svg:path>`,
})
export class ArcticonsMytIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
