import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLayerBringToFrontIcon],svg[hugeicons-layer-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m16.978 8l2.31 1.06C21.095 9.892 22 10.308 22 11s-.904 1.109-2.713 1.94l-4.893 2.247c-1.18.542-1.77.813-2.394.813s-1.214-.271-2.394-.813l-4.893-2.248C2.904 12.11 2 11.693 2 11s.904-1.109 2.713-1.94L7.022 8M12 2.5V10m3-5c-.59-.607-2.16-3-3-3S9.59 4.393 9 5"></svg:path><svg:path d="M20.233 15.5C21.41 16.062 22 16.44 22 17c0 .693-.904 1.109-2.713 1.94l-4.893 2.247c-1.18.542-1.77.813-2.394.813s-1.214-.27-2.394-.813L4.713 18.94C2.904 18.11 2 17.694 2 17c0-.56.59-.938 1.767-1.5"></svg:path></svg:g>`,
})
export class HugeiconsLayerBringToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
