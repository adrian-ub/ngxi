import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIceIcon],svg[arcticons-ice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.329 14.727L24.043 2.5L21.76 14.727l2.266 7.354zm6.944 11.602L45.5 24.043L33.273 21.76l-7.354 2.266zm-11.601 6.944L23.956 45.5l2.284-12.227l-2.266-7.354zm-6.945-11.601L2.5 23.956l12.227 2.284l7.354-2.266zm17.477-2.582l7.03-10.261l-10.26 7.03l-3.599 6.803zM28.91 32.204l10.261 7.03l-7.03-10.26l-6.803-3.599zM15.796 28.91l-7.03 10.261l10.26-7.03l3.599-6.803zm3.294-13.114L8.828 8.766l7.03 10.26l6.803 3.599z"></svg:path>`,
})
export class ArcticonsIceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
